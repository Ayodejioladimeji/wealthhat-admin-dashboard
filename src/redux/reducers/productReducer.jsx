import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  all_products: [],
  all_categories: [],
  sub_categories: [],
  category_modal: false,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.GET_CATEGORIES:
      return {
        ...state,
        all_categories: payload,
      };

    case GLOBALTYPES.SUB_CATEGORIES:
      return {
        ...state,
        sub_categories: payload,
      };

    case GLOBALTYPES.ALL_PRODUCT:
      return {
        ...state,
        all_products: payload,
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

export default productReducer;
