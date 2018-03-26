import React                  from "react"

//packages
import { Helmet }             from "react-helmet";
import { Switch, Route }      from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux'
import { connect }            from "react-redux"
import styled                 from 'styled-components';

import actions                from "/imports/redux/actions/index"

import DynamicImporter        from "/imports/components/DynamicImporter";

//Components
import PublicHeader           from "/imports/components/headers/PublicHeader";

//pages
import Home                   from "/imports/ui/Home/Home"
import SmallFooter from "../components/ui/SmallFooter";

const { checkDeviceSize } = actions

const MainLayout = (props) => {
  global.notify = {
    success: (message) => toast.success(message, {
      position: toast.POSITION.BOTTOM_LEFT
    }),
    error: (message) => toast.error(message, {
      position: toast.POSITION.BOTTOM_LEFT
    }),
    warn: (message) => toast.warn(message, {
      position: toast.POSITION.BOTTOM_LEFT
    }),
    info: (message) => toast.info(message, {
      position: toast.POSITION.BOTTOM_LEFT
    })
  }

  if (Meteor.isClient) {
    props.checkDeviceSize();
  }
  
return (
    <MainStyleWrapper id="main-layout">
      <PublicHeader { ...props } />
      <main>
        <Switch>
          <Route component={ Home } exact path="/" />
        </Switch>
      </main>
      <SmallFooter {...props}/>
      <ToastContainer />
    </MainStyleWrapper>
  )
} 

const mapStateToProps     = ({ user, settings: { isMobile } }) => ({ user, isMobile });
const mapDispatchToProps  = dispatch => bindActionCreators({checkDeviceSize}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

const MainStyleWrapper = styled.div`

*:not(i){
  font-family: 'Titillium Web' !important;
}

@media only screen and (max-width: 767px){
  main {
    padding-left: 0px;
  }
}

body, html {
  background-color: #F7F7F7;
}

.alignLeft, .alignLeft *{
  text-align: left !important;
}
.alignRight, .alignRight *{
  text-align: right !important;
}
.alignCenter, .alignCenter *{
  text-align: center !important;
}
.alignJustify, .alignJustify *{
  text-align: justify !important;
}
.buttonMobile {
  position: fixed;
  z-index: 150;
  top: 10px;
  left: 10px;
}
`