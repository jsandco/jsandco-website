import {
    applyMiddleware,
    compose,
  }                                 from 'redux';
  import { Tracker }                from 'meteor/tracker';
  import createReactiveMiddlewares  from 'meteor-redux-middlewares';
  import thunk                      from 'redux-thunk';
  import { createLogger }           from 'redux-logger';
  import { composeWithDevTools }    from 'redux-devtools-extension';
  
  const { sources, subscriptions } = createReactiveMiddlewares(Tracker);
  
  const logger = createLogger({
    collapsed: true
  })
  const modules = [thunk, logger, sources, subscriptions];
  const modulesProd = [thunk, sources, subscriptions];
  
  const middlewares = (
    !Meteor.isProduction ?
      compose(composeWithDevTools(applyMiddleware(...modules)))
      :
      compose(applyMiddleware(...modulesProd))
  );
  
  
  export default middlewares;
  
  