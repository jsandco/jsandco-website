const styles = (val, props) => {
  const {
    zIndex,
    right,
    height,
    handleWidth,
    overlayColor,
    fadeOut,
    offset,
  } = props;

  let clientWidth = 1000;
  let { width } = props;

  if (typeof document !== 'undefined') {
    clientWidth = document.body.clientWidth;
    if (/\D/.test(width)) width = document.body.clientWidth * (width.match(/\d*/) / 100);
  }

  const opacity = (val - offset) / width;

  if (right) val = width - val; // eslint-disable-line no-param-reassign
  else val -= width; // eslint-disable-line no-param-reassign

  const drawer = {
    display: 'block',
    width,
    height,
    overflow: 'auto',
  };

  const getNegativeValue = (value) => {
    if (value > 0) {
      return 0;
    }
    return value;
  };

  const transform = {
    boxSizing: 'content-box',
    pointer: 'cursor',
    position: 'fixed',
    display: 'block',
    zIndex,
    width,
    [right ? 'paddingLeft' : 'paddingRight']: handleWidth,
    maxWidth: width,
    height,
    top: 0,
    [right ? 'right' : 'left']: 0,
    margin: 0,
    transform: `translate3d(${getNegativeValue(val)}px, 0, 0)`,
    WebkitTransform: `translate3d(${getNegativeValue(val)}px, 0, 0)`,
    opacity: fadeOut ? opacity : 1,
  };

  const overlayTransform = right ? -width : width;
  const overlay = {
    zIndex: -2,
    pointer: 'cursor',
    position: 'fixed',
    width: clientWidth,
    height: '100%',
    background: overlayColor,
    opacity,
    top: 0,
    [right ? 'right' : 'left']: 0,
    margin: 0,
    transform: `translate3d(${overlayTransform}px, 0, 0)`,
    WebkitTransform: `translate3d(${overlayTransform}px, 0, 0)`,
  };

  return { drawer, transform, overlay };
};

export default styles;
