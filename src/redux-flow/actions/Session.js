import { SAVE_SESSION } from '../constants/Session';

const saveSession = (params, dispatch) => {
  dispatch({
    type: SAVE_SESSION,
    payload: params,
  });
};

export const actionSaveSession = params => dispatch => saveSession(params, dispatch);
