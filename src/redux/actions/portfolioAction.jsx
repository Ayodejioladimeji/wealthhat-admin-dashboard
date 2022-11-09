import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// Get All portfolio
export const all_portfolio = (token) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { portfolioloading: true } });
    const res = await getDataAPI("all_portfolio", token);

    dispatch({
      type: GLOBALTYPES.ALL_PORTFOLIO,
      payload: res.data,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { portfolioloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { portfolioloading: false } });
  }
};
