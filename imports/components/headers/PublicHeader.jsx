import React                  from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from "react-redux"
import styled                 from 'styled-components';

import actions                from "/imports/redux/actions/index"

import {
  Menu,
  Image,
  Header,
  Button
} from "semantic-ui-react"

import Drawer                 from "/imports/components/drawer/Drawer"
import { colors }             from "/imports/commons/colors";
import { scrollToY }          from '/imports/library/scroller';
import SeparatorJs            from "/imports/components/ui/SeparatorJs";

const { toggleMobileMenu } = actions



const PublicHeader = ({ isMobile, opened, toggleMobileMenu }) => {
  const scrollToAction = (e, { name }) => {
    scrollToY(name)
    toggleMobileMenu({ opened: false })
  } 
  if(isMobile){
    return (
      <div>
        <Menu
          borderless 
          fixed="top"
          style={{backgroundColor: colors.main.black}}
          size="large"
          inverted
        >
        <Menu.Item>
        <Button 
          icon="content" 
          style={{backgroundColor: colors.main.black, color: colors.main.yellow, borderColor: colors.main.yellow }}
          key='buttonmobile'
          inverted
          circular
          onClick={() => toggleMobileMenu({ opened: !opened })}
        />
        </Menu.Item>
      </Menu>
      <Drawer
        width={252}
        open={opened}
        key='drawer'
        onChange={opened => toggleMobileMenu({ opened })}
      >
        <MenuWithItems isMobile={isMobile} scrollTo={scrollToAction}/>
      </Drawer>
      </div>
    )
  } else if (!isMobile){
    return <MenuWithItems isMobile={isMobile} scrollTo={scrollToAction} />
  }
}

const mapStateToProps     = ({ settings: { isMobile, opened } }) => ({ isMobile, opened });
const mapDispatchToProps  = dispatch => bindActionCreators({toggleMobileMenu}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PublicHeader);

const MenuWithItems = ({ isMobile,scrollTo }) => (
  <MenuWrapper isMobile={isMobile}>
    <Menu 
      borderless 
      fixed={isMobile ? "left" : "top"}
      style={{backgroundColor: colors.main.black}}
      vertical={isMobile}
      size="large"
      inverted
    >
      <Menu.Item className="logo"> 
      { isMobile ? 
      <Header content={
        <span className="wrapper mobile">
          <div>J</div>
          <div>S</div>
          <div className="middle">&</div>
          <div>C</div>
          <div>o</div>
      </span>
      }/>
      : 
      <span className="wrapper">
          <div>J</div>
          <div>S</div>
          <div className="middle">&</div>
          <div>C</div>
          <div>o</div>
      </span>
      }
        
      </Menu.Item>
      <Menu.Item position="right" name="about" onClick={scrollTo} className="link"> 
        {isMobile && "JS & "} Quoi?
      </Menu.Item>
      <Menu.Item name="team" onClick={scrollTo} className="link"> 
        {isMobile && "JS & "}Qui?
      </Menu.Item>
      <Menu.Item name="contact" onClick={scrollTo} className="link"> 
        {isMobile && "JS & "}Où?
      </Menu.Item>
    </Menu>
  </MenuWrapper>
)

const MenuWrapper = styled.div`
.inverted.menu {
  .item.link {
    color: ${colors.main.yellow} !important;
    font-size: ${({ isMobile }) => isMobile ? "1.5rem" : null};
    text-align: ${({ isMobile }) => isMobile ? "center" : null};
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
`