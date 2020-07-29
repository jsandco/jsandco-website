import React from 'react';

import { Route } from 'react-router-dom';

const Public = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => React.createElement(component, { ...rest, ...props })} />
);

export default Public;
