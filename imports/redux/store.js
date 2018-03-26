import { createStore }  from 'redux';

import reducers         from './reducers/index';
import middlewares      from './middlewares';

let preloadedState = {}

if (Meteor.isClient) {
    preloadedState = window.__PRELOADED_STATE__;
    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;
}

const store = createStore(reducers, { ...preloadedState }, middlewares);

export const storeSSR = args => createStore(reducers, { ...args }, middlewares);

export default store;

