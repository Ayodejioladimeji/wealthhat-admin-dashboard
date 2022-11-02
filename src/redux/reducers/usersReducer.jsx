import { GLOBALTYPES } from '../actions/globalTypes';

const initialState = {
  all_users: [],
  category_modal: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
