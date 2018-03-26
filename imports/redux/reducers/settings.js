import { ACTIONS } from '../enums';
import { mobileViewSize }   from '/imports/library/utilities';

const initialState = {
  isMobile: Meteor.isCordova || mobileViewSize(),
  opened: false,
};


const reducers = function (state = initialState, action) {
  const { type, opened, payload, sizes } = action;

  switch (type) {
    case ACTIONS.TOGGLE_MOBILE_MENU:  {
      return ({ ...state, opened });
    }
    case ACTIONS.CHECK_DEVICE_SIZE:  {
      return ({ ...state, ...sizes });
    }
    default: {
      return state;
    }
  }
};

export default reducers;
