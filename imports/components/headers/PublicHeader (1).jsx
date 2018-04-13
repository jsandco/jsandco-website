import React                  from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from "react-redux"

import actions                from "/imports/redux/actions/index"

import {
  Menu,
  Image,
  Button
} from "semantic-ui-react"

import Drawer                 from "/imports/components/drawer/Drawer"

const { toggleMobileMenu } = actions



const PublicHeader = ({ isMobile, opened, toggleMobileMenu }) => {
  if(isMobile){
    return (
      <span>
        <Menu   
          borderless 
          fixed="top"
          style={{backgroundColor: "rgb(76,118,130)"}}
          size="large"
          inverted
        >
        <Menu.Item>
        <Button 
          icon="content" 
          color="green"
          style={{backgroundColor: "rgb(76,118,130)"}}
          key='buttonmobile'
          circular
          onClick={() => toggleMobileMenu({ opened: !opened })}
        />
        </Menu.Item>
      </Menu>
      <Drawer
        width={252}
        open={opened}
        key='drawer'
        onChange={open => toggleMobileMenu({ opened: open })}
      >
        <MenuWithItems isMobile={isMobile} />
      </Drawer>
      </span>
    )
  } else if (!isMobile){
    return <MenuWithItems isMobile={isMobile} />
  }
}

const mapStateToProps     = ({ settings: { isMobile, opened } }) => ({ isMobile, opened });
const mapDispatchToProps  = dispatch => bindActionCreators({toggleMobileMenu}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PublicHeader);

const MenuWithItems = ({ isMobile }) => (
  <Menu 
    borderless 
    fixed={isMobile ? "left" : "top"}
    style={{backgroundColor: "rgb(76,118,130)"}}
    vertical={isMobile}
    size="large"
    inverted
  >
    <Menu.Item position={ isMobile ? "right" : null }> 
      Menu Item
    </Menu.Item>
    <Menu.Item> 
      Menu Item
    </Menu.Item>
  </Menu>
)