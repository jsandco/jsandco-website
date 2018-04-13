import React              from 'react';
import { hydrate }        from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
}                         from 'react-router-dom';
// components
import App                from '/imports/startup/router';
import { Provider }       from 'react-redux';
import store              from '/imports/redux/store';
import actions            from '/imports/redux/actions/index';
import { loadComponents } from 'loadable-components';


store.dispatch(actions.userSubscription());

Meteor.startup(async () => {
  Tracker.autorun(async (computation) => {
    if (Roles.subscription.ready()) {
      await loadComponents();
      hydrate(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.getElementById('root'),
      );
      computation.stop();
    }
  });
});


// const dealWithKeyboard = ({ key, ctrlKey, shiftKey }) => {
//   if (key === 'Y' && ctrlKey && shiftKey) {
//     console.log('ok');
//   }
// };
// window.addEventListener('keypress', dealWithKeyboard, true);
