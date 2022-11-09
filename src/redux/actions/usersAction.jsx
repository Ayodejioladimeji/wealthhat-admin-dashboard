import { getDataAPI, postDataAPIS } from '../../utils/fetchData';
import { GLOBALTYPES } from './globalTypes';
import { deleteDataAPIS } from './../../utils/fetchData';

// Create Agent
export const createAgent = (data, token) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { createagentloading: true },
    });

    const res = await postDataAPIS('create_agent', data, token);
    console.log(res.data.msg);

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { success: res.data.msg },
    });

    setTimeout(() => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { createagentloading: false },
      });
      window.location.href = '/dashboard/all-agents';
    }, 2000);
  } catch (error) {
    console.log(error.response.data.msg);
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.msg,
      },
    });

    setTimeout(() => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {},
      });
    }, 6000);
  }
};

// get logged in agent
export const loggedAgent = (token) => async (dispatch) => {
  try {
    // dispatch({ type: GLOBALTYPES.ALERT, payload: { agentloading: true } });
    const res = await getDataAPI('agent', token);

    res.data.role === 1 &&
      dispatch({ type: GLOBALTYPES.IS_ADMIN, payload: true });

    dispatch({
      type: GLOBALTYPES.LOGGED_AGENT,
      payload: res.data,
    });

    // dispatch({ type: GLOBALTYPES.ALERT, payload: { agentloading: false } });
  } catch (error) {
    // console.log(error.response);
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

// Get All Agents
export const all_agents = (token) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { getagentloading: true } });
    const res = await getDataAPI('all_agents', token);
    // console.log(res.data);

    dispatch({
      type: GLOBALTYPES.ALL_AGENTS,
      payload: res.data,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { getagentloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { getagentloading: false } });
  }
};

// Get All Users
export const all_users = (token) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { getagentloading: true } });
    const res = await getDataAPI('all_users', token);
    // console.log(res.data);

    dispatch({
      type: GLOBALTYPES.ALL_USERS,
      payload: res.data,
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { getagentloading: false } });
  } catch (error) {
    //
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: error.response.data.error,
      },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { getagentloading: false } });
  }
};

export const delete_agents =
  (id, token, delete_callback) => async (dispatch) => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { deleteloading: true } });
      const res = await deleteDataAPIS(`agents/delete/${id}`, token);
      dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });

      // callback
      dispatch({
        type: GLOBALTYPES.DELETE_CALLBACK,
        payload: !delete_callback,
      });

      setTimeout(() => {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { deleteloading: true } });
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      }, 2000);
    } catch (error) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: error.response.data.error,
        },
      });

      setTimeout(() => {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
      }, 5000);
    }
  };
