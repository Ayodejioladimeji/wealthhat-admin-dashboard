import { GLOBALTYPES } from "../actions/globalTypes";

//
const initialState = {
  all_activity: [],
};

const activityReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.ALL_ACTIVITY:
      return {
        ...state,
        all_activity: payload,
      };

    default:
      return state;
  }
};

export default activityReducer;
