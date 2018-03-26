import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';

import { Route, Redirect } from 'react-router-dom';



const Authenticated = ({ loggingIn, authenticated, component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (loggingIn) return <div></div>;
    return authenticated ?
     (React.createElement(component, { ...rest, ...props, loggingIn, authenticated }))
    :
    <Redirect to="/" />;
  }} />
);

export default Authenticated
