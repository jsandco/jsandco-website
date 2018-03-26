import React, { Component }     from 'react';
import { Meteor }               from 'meteor/meteor';

//router
import { 
    BrowserRouter as Router,
    Switch,
    Route
  }                             from 'react-router-dom';

//pages & containers
import MainLayout               from "/imports/layouts/MainLayout";


const App = appProps => ( 
    <Router>
        <MainLayout {...appProps }/>
    </Router>
)

export default App
