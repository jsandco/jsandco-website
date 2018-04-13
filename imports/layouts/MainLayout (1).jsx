import React                  from "react"

//packages
import { Helmet }             from "react-helmet";
import { Switch, Route }      from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { bindActionCreators } from 'redux'
import { connect }            from "react-redux"
import actions                from "/imports/redux/actions/index"

import DynamicImporter        from "/imports/components/DynamicImporter";

//Components
import PublicHeader           from "/imports/components/headers/PublicHeader";

//pages
import Home                   from "/imports/ui/Home"

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
    window.addEventListener('resize', (f) => {
      props.checkDeviceSize();
    });
  }
  
return (
    <div id="main-layout">
      <Helmet>
        <title>Boilerplate</title>
        <meta name="robots" content="noindex"/>
      </Helmet>
      <PublicHeader { ...props } />
      <main>
        <Switch>
          <Route component={ Home } exact path="/" />
        </Switch>
      </main>
      <ToastContainer />
    </div>
  )
} 

const mapStateToProps     = ({ user }) => ({ user });
const mapDispatchToProps  = dispatch => bindActionCreators({checkDeviceSize}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);