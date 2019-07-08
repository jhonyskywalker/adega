import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constants/Products';

const initialState = {
  loading: false,
  error: false,
  payload: {
    poc: {
      products: [],
    },
  },
};

const Products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        ...action,
        loading: true,
        error: false,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action,
        loading: false,
        error: false,
      };
    case FETCH_PRODUCTS_FAILURE:
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

export default Products;
