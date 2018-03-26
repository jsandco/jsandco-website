import { Mongo }        from 'meteor/mongo';
import { secure }       from "/imports/modules"

const Items = new Mongo.Collection("items");
secure(Items)

export default Items
