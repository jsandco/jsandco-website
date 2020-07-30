import React from 'react';

// packages
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// pages
import Home from '/imports/ui/Home';
import Login from '/imports/ui/Login';
import Connected from '/imports/ui/Connected';
import SmallFooter from '/imports/ui/components/ui/SmallFooter';
import Authenticated from '/imports/ui/components/routes/Authenticated';

import Wrapper from './Wrapper';

const MainLayout = (props) => (
  <Wrapper id="main-layout">
    <main>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Login} path="/login" />
        <Authenticated component={Connected} path="/connected" />
      </Switch>
    </main>
    <SmallFooter {...props} />
    <ToastContainer />
  </Wrapper>
);

export default MainLayout;
