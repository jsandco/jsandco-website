import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const userSchema = new SimpleSchema({
  username: {
    type: String,
  },
  emails: {
    type: Array,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  heartbeat: {
    type: Date,
    optional: true,
  },
});

Meteor.users.attachSchema(userSchema);
