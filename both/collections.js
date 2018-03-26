
//File to delete in production
// This is only to display collection in meteor toys on Dev-Mode

if ( Meteor.isDevelopment && Meteor.isClient ) {
  import Items from "/imports/api/items/items"
}
