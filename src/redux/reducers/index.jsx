import { combineReducers } from "redux";

import utils from "./utilsReducer";
import alert from "./alertReducer";
import users from "./usersReducer";
import auth from "./authReducer";
import activity from "./activityReducer";
import portfolio from "./portfolioReducer";
import payment from "./paymentReducer";

// =================
export default combineReducers({
  utils,
  alert,
  users,
  auth,
  activity,
  portfolio,
  payment,
});
