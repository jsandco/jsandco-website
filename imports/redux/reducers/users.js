import { ACTIONS } from '../enums';


const reducers = function (state = {}, { type, payload = {} }) {
  switch (type) {
    case ACTIONS.USER_SUBSCRIPTION_CHANGED:  {
      return ({
        ...payload,
        isAdmin: Roles.userIsInRole(Meteor.userId(), ['admin']),
        loggingIn: Meteor.loggingIn(),
        authenticated: Meteor.userId() !== null && Meteor.userId() !== undefined,
      });
    }
    default: {
      return state;
    }
  }
};


export default reducers;
