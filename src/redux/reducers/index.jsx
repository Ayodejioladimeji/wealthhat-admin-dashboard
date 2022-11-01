import { combineReducers } from "redux";

import utils from "./utilsReducer";
import alert from "./alertReducer";
import products from "./productReducer";

// =================
export default combineReducers({
  utils,
  alert,
  products,
});
