import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from './../../utils/fetchData';

//
export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { authloading: true } });

    const res = await postDataAPI('login_agent', data);

    dispatch({ type: GLOBALTYPES.TOKEN, payload: res.data.access_token });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.msg },
    });

    //
    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      window.location.href = '/overview';
    }, 2000);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });

    setTimeout(() => {
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    }, 5000);
  }
};
