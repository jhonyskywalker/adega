import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../constants/Products';

import Products from '../../config/api/Products';

const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = payload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

const fetchProductsFailure = payload => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload,
});

const fetchProducts = (params, dispatch) => {
  dispatch(fetchProductsRequest());

  Products.get({
    variables: {
      id: params.id,
      search: '',
      categoryId: 0,
    },
  }).then((response) => {
    const data = response.data.poc ? response.data : { poc: { products: [] } };

    dispatch(fetchProductsSuccess(data));
  }).catch(() => {
    dispatch(fetchProductsFailure());
  });
};

export const actionFetchProducts = params => dispatch => fetchProducts(params, dispatch);
