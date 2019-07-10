import {
  FETCH_STORES_REQUEST,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAILURE,
} from '../constants/Stores';

const initialState = {
  loading: false,
  error: false,
  payload: {
    pocSearch: [],
    noContent: false,
  },
};

const Stores = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORES_REQUEST:
      return {
        ...state,
        ...action,
        loading: true,
        error: false,
      };
    case FETCH_STORES_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      };
    case FETCH_STORES_FAILURE:
      return {
        ...state,
        ...action,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Stores;
