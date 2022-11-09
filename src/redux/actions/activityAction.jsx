import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// Get All Activity
export const all_activity = (token) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { activityloading: true } });
    const res = await getDataAPI("all_activity", token);

    dispatch({
      type: GLOBALTYPES.ALL_ACTIVITY,
      payload: res.data,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { activityloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { activityloading: false } });
  }
};
