import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// Get All Payment
export const all_payment = (token) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { paymentloading: true } });
    const res = await getDataAPI("all_payment", token);

    dispatch({
      type: GLOBALTYPES.ALL_PAYMENT,
      payload: res.data,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { paymentloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { paymentloading: false } });
  }
};
