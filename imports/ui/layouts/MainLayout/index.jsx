import React from 'react';

// packages
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Components
import PublicHeader from '/imports/ui/components/headers/PublicHeader';

// pages
import Home from '/imports/ui/Home';
import SmallFooter from '/imports/ui/components/ui/SmallFooter';

import Wrapper from './Wrapper';

const MainLayout = (props) => (
  <Wrapper id="main-layout">
    <PublicHeader {...props} />
    <main>
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </main>
    <SmallFooter {...props} />
    <ToastContainer />
  </Wrapper>
);

export default MainLayout;
