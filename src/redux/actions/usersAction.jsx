import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// get logged in agent
export const loggedAgent = (token) => async (dispatch) => {
  try {
    // dispatch({ type: GLOBALTYPES.ALERT, payload: { agentloading: true } });
    const res = await getDataAPI("user", token);

    res.data.role === 1 &&
      dispatch({ type: GLOBALTYPES.IS_ADMIN, payload: true });

    dispatch({
      type: GLOBALTYPES.LOGGED_AGENT,
      payload: res.data,
    });

    // dispatch({ type: GLOBALTYPES.ALERT, payload: { agentloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    // dispatch({ type: GLOBALTYPES.ALERT, payload: { agentloading: false } });
  }
};

// Get All Users
export const all_users = (token) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { userloading: true } });
    const res = await getDataAPI("all_users", token);
    // console.log(res.data);

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
