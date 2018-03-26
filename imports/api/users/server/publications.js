import { Meteor }     from 'meteor/meteor';
import { check }      from 'meteor/check';

Meteor.publish('users.one', ({ userId }) => {
  return Meteor.users.find({ _id: userId });
})

Meteor.publish('users.himself', function(){
  return Meteor.users.find({ _id: this.userId });
})