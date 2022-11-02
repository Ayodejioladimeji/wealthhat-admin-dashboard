import { combineReducers } from 'redux';

import utils from './utilsReducer';
import alert from './alertReducer';
import users from './usersReducer';

// =================
export default combineReducers({
  utils,
  alert,
  users,
});
