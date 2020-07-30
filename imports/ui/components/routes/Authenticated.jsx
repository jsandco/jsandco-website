import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const Authenticated = (props) => {
  const authenticated = useTracker(() => Meteor.userId(), []);

  if (authenticated) {
    return (
      <Route {...props} />
    );
  }

  return (
    <Redirect to="/" />
  );
};

export default Authenticated;
