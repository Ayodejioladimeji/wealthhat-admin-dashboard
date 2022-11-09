import { GLOBALTYPES } from "../actions/globalTypes";

//
const initialState = {
  all_payment: [],
};

const paymentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.ALL_PAYMENT:
      return {
        ...state,
        all_payment: payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;
