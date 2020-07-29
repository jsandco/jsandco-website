import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { Menu, Header, Button } from 'semantic-ui-react';

import Drawer from '/imports/ui/components/drawer/Drawer';
import colors from '/imports/commons/colors';
import { scrollToY } from '/imports/library/scroller';

const PublicHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  const scrollToAction = useCallback((e, { name }) => {
    scrollToY(name);
    setIsOpened(false);
  }, []);

  const isMobile = useMemo(() => window.innerWidth < 720, []);

  if (isMobile) {
    return (
      <div>
        <Menu
          borderless
          fixed="top"
          style={{ backgroundColor: colors.main.black }}
          size="large"
          inverted
        >
          <Menu.Item>
            <Button
              icon="content"
              style={{
                backgroundColor: colors.main.black,
                color: colors.main.yellow,
                borderColor: colors.main.yellow,
              }}
              key="buttonmobile"
              inverted
              circular
              onClick={() => setIsOpened(!isOpened)}
            />
          </Menu.Item>
        </Menu>
        <Drawer
          width={252}
          open={isOpened}
          key="drawer"
          onChange={(opened) => setIsOpened(opened)}
        >
          <MenuWithItems isMobile={isMobile} scrollTo={scrollToAction} />
        </Drawer>
      </div>
    );
  }

  return (
    <MenuWithItems isMobile={isMobile} scrollTo={scrollToAction} />
  );
};

export default PublicHeader;

const MenuWithItems = ({ isMobile, scrollTo }) => (
  <MenuWrapper isMobile={isMobile}>
    <Menu
      borderless
      fixed={isMobile ? 'left' : 'top'}
      style={{ backgroundColor: colors.main.black }}
      vertical={isMobile}
      size="large"
      inverted
    >
      <Menu.Item className="logo">
        { isMobile
          ? (
            <Header content={(
              <span className="wrapper mobile">
                <div>J</div>
                <div>S</div>
                <div className="middle">&</div>
                <div>C</div>
                <div>o</div>
              </span>
      )}
            />
          )
          : (
            <span className="wrapper">
              <div>J</div>
              <div>S</div>
              <div className="middle">&</div>
              <div>C</div>
              <div>o</div>
            </span>
          )}

      </Menu.Item>
      <Menu.Item position="right" name="about" onClick={scrollTo} className="link">
        {isMobile && 'JS & '}
        {' '}
        Quoi?
      </Menu.Item>
      <Menu.Item name="team" onClick={scrollTo} className="link">
        {isMobile && 'JS & '}
        Qui?
      </Menu.Item>
      <Menu.Item name="contact" onClick={scrollTo} className="link">
        {isMobile && 'JS & '}
        Où?
      </Menu.Item>
    </Menu>
  </MenuWrapper>
);

const MenuWrapper = styled.div`
.inverted.menu {
  .item.link {
    color: ${colors.main.yellow} !important;
    font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : null)};
    text-align: ${({ isMobile }) => (isMobile ? 'center' : null)};
  }
  .item .wrapper{
      display: flex;
      justify-content: center;
      color: ${colors.main.yellow};
      font-size: 1.5rem;
      font-weight: bold !important;
      div {
        padding-left: 3px;
        padding-right: 3px;
      }
      .middle {
        color: white !important;
      }
  }
  .item .wrapper.mobile{
      border-bottom: 1px solid ${colors.main.yellow};
      padding-bottom: 8px;
      font-size: 2.2rem;
      div {
        padding: 3px;
      }
  }
}
`;
