import {
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE,
} from '../constants/Places';

const initialState = {
  loading: false,
  error: false,
  payload: {
    features: [],
  },
};

const Places = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_REQUEST:
      return {
        ...state,
        ...action,
        loading: true,
        error: false,
      };
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      };
    case FETCH_PLACES_FAILURE:
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

export default Places;
