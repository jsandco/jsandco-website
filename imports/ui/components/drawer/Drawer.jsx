import React from 'react';
import { Motion, spring } from 'react-motion';
import Hammer from 'react-hammerjs';
import assign from '1-liners/assign';
import isFunction from '1-liners/isFunction';
import styles from './styles';

export default class Drawer extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    zIndex: 10000,
    noTouchOpen: false,
    noTouchClose: false,
    onChange: () => {},
    overlayColor: 'rgba(0, 0, 0, 0.4)',
    config: [350, 40],
    open: false,
    width: 300,
    height: '100%',
    handleWidth: 20,
    peakingWidth: 50,
    panTolerance: 50,
    right: false,
    fadeOut: false,
    offset: 0,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    currentState: 'CLOSED',
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    const { open: nextOpen } = nextProps;

    if (nextOpen !== open) {
      if (nextOpen) this.open();
      else this.close();
    }
  }

  // eslint-disable-next-line react/destructuring-assignment
  isState = (s) => s === this.state.currentState;

  isClosed = () => this.isState('CLOSED');

  isOpen = () => this.isState('OPEN');

  isOpening = () => this.isState('IS_OPENING');

  isClosing = () => this.isState('IS_CLOSING');

  onPress = (e) => {
    const { noTouchOpen } = this.props;
    if (noTouchOpen) return;
    e.preventDefault();
    this.peak();
  };

  onPressUp = (e) => {
    e.preventDefault();
    this.close();
  };

  onPan = (e) => {
    const { noTouchOpen, noTouchClose } = this.props;
    if (this.isClosed() && noTouchOpen) return;
    if (this.isOpen() && noTouchClose) return;
    e.preventDefault();

    const {
      isFinal, pointers, direction, deltaX,
    } = e;
    if (this.inPanTolerance(deltaX)) return;

    if (isFinal) {
      if (this.isOpening()) this.open();
      else if (this.isClosing()) this.close();
      return;
    }

    const { currentState } = this.state;
    const { right, peakingWidth } = this.props;
    const { width } = this.calculateWidth();
    const { clientX } = pointers[0];

    let x = right ? document.body.clientWidth - clientX : clientX;

    if (x + peakingWidth >= width) x = width - peakingWidth;

    const closingOrOpening = this.closingOrOpening(direction);
    const nextState = {
      PEAK: closingOrOpening,
      IS_OPENING: closingOrOpening,
      IS_CLOSING: closingOrOpening,
      OPEN: 'IS_CLOSING',
      CLOSED: 'PEAK',
    };

    this.setState({
      currentState: nextState[currentState],
      x: this.isClosed() ? peakingWidth : peakingWidth / 2 + x,
    });
  };

  onOverlayTap = (e) => {
    e.preventDefault();
    if (this.isOpen()) this.close();
  };

  calculateWidth = () => {
    const { width } = this.props;
    return /\D/.test(width)
      ? document.body.clientWidth * (width.match(/\d*/) / 100)
      : width;
  };

  inPanTolerance(deltaX) {
    const { currentState } = this.state;
    const { panTolerance } = this.props;

    return Math.abs(deltaX) <= panTolerance && currentState === 'OPEN';
  }

  closingOrOpening(direction) {
    return this.isClosingDirection(direction) ? 'IS_CLOSING' : 'IS_OPENING';
  }

  isClosingDirection(direction) {
    const { right } = this.props;
    const isClosing = direction === 2;

    if (right) return !isClosing;
    return isClosing;
  }

  open() {
    const { onChange } = this.props;
    onChange(true);

    return this.setState({ currentState: 'OPEN', x: this.calculateWidth() });
  }

  close() {
    const { onChange } = this.props;
    onChange(false);
    return this.setState({ currentState: 'CLOSED', x: 0 });
  }

  peak() {
    const { onChange, handleWidth } = this.props;
    onChange(false);
    return this.setState({ currentState: 'PEAK', x: handleWidth });
  }

  render() {
    const {
      drawerStyle,
      className,
      overlayClassName,
      children,
      offset,
    } = this.props;
    const { x } = this.state;

    return (
      <Motion style={{ myProp: spring(x + offset || 0, { stiffness: 400 }) }}>
        {(interpolated) => {
          const { drawer, transform, overlay } = styles(
            interpolated.myProp,
            this.props,
          );

          const computedStyle = assign(drawer, drawerStyle);
          if (interpolated.myProp > 0) computedStyle.display = 'block';
          else computedStyle.display = 'none';

          return (
            <div style={transform}>
              <Hammer
                onPress={this.onPress}
                onPressUp={this.onPressUp}
                onPan={this.onPan}
                direction={Hammer.DIRECTION_HORIZONTAL}
              >
                <div className={className} style={computedStyle}>
                  {isFunction(children)
                    ? children(interpolated.myProp)
                    : children}

                  {!this.isClosed()
                    && (
                    <Hammer
                      style={overlay}
                      className={overlayClassName}
                      onTap={this.onOverlayTap}
                    >
                      <span />
                    </Hammer>
                    )}
                </div>
              </Hammer>
            </div>
          );
        }}
      </Motion>
    );
  }
}
