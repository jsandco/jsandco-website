import { ACTIONS } from '../enums';
import { startSubscription } from 'meteor-redux-middlewares';

const userSubscription = () =>
  startSubscription({
    key: 'user',
    get: () => Meteor.user(),
    subscribe: () => Meteor.subscribe('users.himself'),
  });

export default { userSubscription };
