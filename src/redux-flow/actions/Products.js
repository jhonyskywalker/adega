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

    const normalizeData = () => ({
      poc: {
        ...data.poc,
        products: data.poc.products.map(
          product => ({
            ...product,
            productVariants: product.productVariants.map(
              productVariant => ({
                ...productVariant,
                amount: 0,
              }),
            ),
          }),
        ),
      },
    });

    dispatch(fetchProductsSuccess(normalizeData()));
  }).catch(() => {
    dispatch(fetchProductsFailure());
  });
};

const manageProduct = (params, dispatch, getState) => {
  const data = getState().products.payload;

  const normalizeData = () => ({
    poc: {
      ...data.poc,
      products: data.poc.products.map(
        product => ({
          ...product,
          productVariants: product.productVariants.map(
            (productVariant) => {
              if (productVariant.productVariantId === params.productVariantId) {
                return ({
                  ...productVariant,
                  amount: params.amount,
                });
              }

              return productVariant;
            },
          ),
        }),
      ),
    },
  });

  dispatch(fetchProductsSuccess(normalizeData()));
};

export const actionFetchProducts = params => dispatch => fetchProducts(params, dispatch);

export const actionManageProduct = params => (dispatch, getState) => manageProduct(params, dispatch, getState);
