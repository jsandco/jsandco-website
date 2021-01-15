import { Meteor } from 'meteor/meteor';

// eslint-disable-next-line import/prefer-default-export
export const isConnected = (userId) => {
  if (!userId) {
    throw new Meteor.Error(403, 'You must be connected');
  }
};
