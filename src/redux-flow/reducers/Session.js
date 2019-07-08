import { SAVE_SESSION } from '../constants/Session';

const initialState = {
  payload: {
    place: {},
    store: {},
    products: {},
    cart: {},
  },
};

const Session = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SESSION:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};

export default Session;
