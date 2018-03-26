import { combineReducers }  from 'redux';

import { ACTIONS }          from '../enums';
import user                 from './users';
import settings             from './settings';

const rootReducer = combineReducers({
    user,
    settings
});

export default rootReducer;
