import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { userCustomSchema } from '/imports/api/users';
import { isConnected } from '/imports/commons/tests';
import { ROLES } from '/imports/commons/enums';

Meteor.methods({
  'users.updateProfile': function ({ user }) {
    isConnected(this.userId);

    userCustomSchema.validate(user);
    Meteor.users.update(this.userId, { $set: user });
  },

  'users.updateEmail': function ({ email }) {
    isConnected(this.userId);

    const user = Meteor.users.findOne(this.userId);

    Accounts.addEmail(this.userId, email);
    Accounts.removeEmail(this.userId, user.emails[0].adress);
  },

  'users.getBoard': function () {
    return Meteor.users.find({
      isDisplayed: true,
      role: { $in: Object.keys(ROLES) },
    }, {
      fields: {
        firstname: 1,
        lastname: 1,
        photo: 1,
        role: 1,
      },
    }).fetch();
  },

  'users.getAdherents': function () {
    return Meteor.users.find({
      isDisplayed: true,
      role: { $nin: Object.keys(ROLES) },
    }, {
      fields: {
        firstname: 1,
        lastname: 1,
        photo: 1,
        role: 1,
      },
    }).fetch();
  },
});
