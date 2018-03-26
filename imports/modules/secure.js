export const secure = collection => {
  if ( Meteor.isDevelopment ) {
    collection.allow({
      insert  : () => true,
      update  : () => true,
      remove  : () => true
    });
    collection.deny({
      insert  : () => false,
      update  : () => false,
      remove  : () => false
    });
  } else {
    collection.allow({
      insert  : () => false,
      update  : () => false,
      remove  : () => false
    });
    collection.deny({
      insert  : () => true,
      update  : () => true,
      remove  : () => true
    });
  }
};
