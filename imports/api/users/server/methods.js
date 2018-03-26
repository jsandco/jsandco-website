import { Meteor }         from 'meteor/meteor';

//packages
import moment             from 'moment';
import { check }          from "meteor/check"



Meteor.methods({
  createAccount(dataUser){
    var result = Accounts.createUser(dataUser);
    if(result && Meteor.users.find().count() === 1){
      Roles.addUsersToRoles(result, ["admin"])
    }
    return result
  }
});
