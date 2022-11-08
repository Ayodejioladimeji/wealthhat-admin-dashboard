import { combineReducers } from 'redux';

import utils from './utilsReducer';
import alert from './alertReducer';
import users from './usersReducer';
import auth from './authReducer';

// =================
export default combineReducers({
  utils,
  alert,
  users,
  auth,
});
