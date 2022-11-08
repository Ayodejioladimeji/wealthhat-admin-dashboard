import { GLOBALTYPES } from '../actions/globalTypes';

const initialState = {
  token: '',
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.TOKEN:
      return {
        ...state,
        token: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
