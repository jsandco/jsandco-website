import React from 'react';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// pages & containers
import MainLayout from '/imports/ui/layouts/MainLayout';

const App = (appProps) => (
  <Router>
    <MainLayout {...appProps} />
  </Router>
);

export default App;
