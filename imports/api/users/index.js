import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { ROLES } from '/imports/commons/enums';

const userNativeFields = {
  username: {
    type: String,
    optional: true,
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
  heartbeat: {
    type: Date,
    optional: true,
  },
};

const userCustomFields = {
  firstname: {
    type: String,
    optional: true,
  },
  lastname: {
    type: String,
    optional: true,
  },
  photo: {
    type: String,
    optional: true,
  },
  role: {
    type: String,
    allowedValues: Object.keys(ROLES),
    optional: true,
  },
  isDisplayed: {
    type: Boolean,
    optional: true,
  },
};

export const userNativeSchema = new SimpleSchema(userNativeFields);

export const userCustomSchema = new SimpleSchema(userCustomFields);

export const userSchema = new SimpleSchema({
  ...userNativeFields,
  ...userCustomFields,
});

Meteor.users.attachSchema(userSchema);
