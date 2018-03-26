export const mobileViewSize = (size) =>  {
    const newSize = size || 768;
    if (Meteor.isClient) {
      if (window.innerWidth < newSize) {
        return true;
      }
    }
    return false;
  };