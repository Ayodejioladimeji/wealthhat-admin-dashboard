import {
  // deleteDataAPIS,
  getData,
  getDataAPI,
  postDataAPIS,
} from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// Get Categories
export const get_categories = () => async (dispatch) => {
  try {
    const res = await getData("/categories/categories");

    dispatch({
      type: GLOBALTYPES.GET_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
  }
};

// Search Product
// export const search_product = (search) => async (dispatch) => {
//   try {
//     dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
//     const res = await getData(`/search?search=${search}`);

//     dispatch({
//       type: GLOBALTYPES.SEARCH,
//       payload: res.data.data,
//     });

//     dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
//   } catch (error) {
//     //
//     dispatch({
//       type: GLOBALTYPES.ALERT,
//       payload: {
//         error: error.response.data.error,
//       },
//     });
//     dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
//   }
// };

// Create Categories
export const create_categories =
  (data, token, callback) => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { categoryloading: true } });
      const res = await postDataAPIS("/categories/categories", data, token);
      console.log(res);

      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res.data.message,
        },
      });

      setTimeout(() => {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { categoryloading: false },
        });
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
        dispatch({ type: GLOBALTYPES.CALLBACK, payload: !callback });
        dispatch({ type: GLOBALTYPES.CATEGORY_MODAL, payload: false });
      }, 6000);
    } catch (error) {
      //
      console.log(error.response);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: error.response.data.error,
        },
      });
    }
  };

// Get Sub Categories
export const subCategories = (categoryid) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { productloading: true } });

    const res = await getDataAPI(`/subcategories/all/${categoryid}`);

    dispatch({
      type: GLOBALTYPES.SUB_CATEGORIES,
      payload: res.data.data,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { productloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { productloading: false } });
  }
};

// Create Product
// export const createProduct = (data, token) => async (dispatch) => {
//   try {
//     dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

//     const res = await postDataAPIS(
//       'https://verifibiz.herokuapp.com/api/v1/product/add',
//       data,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-type': 'application/json;charset=UTF-8',
//         },
//       }
//     );
//     // console.log(res.data);

//     dispatch({
//       type: GLOBALTYPES.ALERT,
//       payload: {
//         success: res.data.message,
//       },
//     });

//     setTimeout(() => {
//       dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
//       dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
//     }, 6000);
//   } catch (error) {
//     //
//     console.log(error.response);
//     dispatch({
//       type: GLOBALTYPES.ALERT,
//       payload: {
//         error: error.response.data.error,
//       },
//     });
//   }
// };

// Get All Product
export const all_product = () => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { productloading: true } });
    const res = await getData("/products/all");

    dispatch({
      type: GLOBALTYPES.ALL_PRODUCT,
      payload: res.data,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { productloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { productloading: false } });
  }
};
