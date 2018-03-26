import usersActions from './users';
import settingsActions from './settings';

const actions = {
  ...usersActions,
  ...settingsActions
};

export default actions;

