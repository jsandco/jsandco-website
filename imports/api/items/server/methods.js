import { Meteor }         from 'meteor/meteor';

//packages
import moment             from 'moment';
import { check }          from "meteor/check"

//collection
import Items              from "../items"


Meteor.methods({
  createNewItems({ name, description }){
    return Items.insert({ name, description })
  },
});
