import { Meteor }     from 'meteor/meteor';
import { check }      from 'meteor/check';
import Items          from '../items';

Meteor.publish('items.one', ({ itemId }) => {
  return Items.find({ _id: itemId });
})
