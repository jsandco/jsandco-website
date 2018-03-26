import { Meteor } from 'meteor/meteor';
import "/imports/startup/server";

METEORTOYSSHELLENABLED = true
process.env.MAIL_URL = Meteor.settings.private.mail_url

