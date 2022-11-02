import { getDataAPI } from '../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';

// all Users
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
export const all_users = () => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { userloading: true } });
    const res = await getDataAPI('all_users');
    console.log(res.data);

    dispatch({
      type: GLOBALTYPES.ALL_USERS,
      payload: res.data,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { userloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { userloading: false } });
  }
};
