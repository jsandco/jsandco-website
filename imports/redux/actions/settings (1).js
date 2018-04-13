import { ACTIONS }          from '../enums';
import { mobileViewSize }   from '/imports/library/utilities';


const toggleMobileMenu = ({ opened }) => ({
  type: ACTIONS.TOGGLE_MOBILE_MENU,
  opened,
});

const checkDeviceSize = () => {
  const isMobile = Meteor.isCordova || mobileViewSize();
  const sizes = { isMobile };
  return {
    type: ACTIONS.CHECK_DEVICE_SIZE,
    sizes,
  };
};

export default {
  toggleMobileMenu,
  checkDeviceSize,
};
