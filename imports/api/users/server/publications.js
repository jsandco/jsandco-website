import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.users.find(this.userId, {
      fields: {
        username: 1,
        emails: 1,
        firstname: 1,
        lastname: 1,
        photo: 1,
        role: 1,
      },
      sort: { _id: 1 },
      limit: 1,
    });
  }
  this.ready();
  return null;
});
