import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  toggle: false,
  callback: false,
};

const utilsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.TOGGLE:
      return {
        toggle: payload,
      };
    case GLOBALTYPES.CALLBACK:
      return {
        callback: payload,
      };

    default:
      return state;
  }
};

export default utilsReducer;
