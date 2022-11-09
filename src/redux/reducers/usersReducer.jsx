import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  all_users: [],
  logged_agent: {},
  is_admin: false,
  category_modal: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.LOGGED_AGENT:
      return {
        ...state,
        logged_agent: payload,
      };

    case GLOBALTYPES.IS_ADMIN:
      return {
        ...state,
        is_admin: payload,
      };

    case GLOBALTYPES.ALL_USERS:
      return {
        ...state,
        all_users: payload,
      };

    case GLOBALTYPES.CATEGORY_MODAL:
      return {
        ...state,
        category_modal: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
