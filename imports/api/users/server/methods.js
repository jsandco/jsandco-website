import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { userCustomSchema } from '/imports/api/users';
import { isConnected } from '/imports/commons/tests';

Meteor.methods({
  'users.updateProfile': function ({ user }) {
    isConnected();

    userCustomSchema.validate(user);
    Meteor.users.update(this.userId, { $set: user });
  },
  'users.updateEmail': function ({ email }) {
    isConnected();

    const user = Meteor.users.findOne(this.userId);

    Accounts.addEmail(this.userId, email);
    Accounts.removeEmail(this.userId, user.emails[0].adress);
  },
});
