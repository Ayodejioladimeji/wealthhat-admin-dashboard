import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from './../../utils/fetchData';

//
export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: true } });

    const res = await postDataAPI('login', data);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: 'Login Successful' },
    });
    dispatch({ type: GLOBALTYPES.TOKEN, payload: res.data.access_token });

    //
    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: false } });
      history.push('/');
    }, 2000);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.message },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: false } });
    }, 5000);
  }
};
