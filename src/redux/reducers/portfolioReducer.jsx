import { GLOBALTYPES } from "../actions/globalTypes";

//
const initialState = {
  all_portfolio: [],
};

const portfolioReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.ALL_PORTFOLIO:
      return {
        ...state,
        all_portfolio: payload,
      };

    default:
      return state;
  }
};

export default portfolioReducer;
