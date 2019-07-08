import {
  FETCH_STORES_FAILURE,
  FETCH_STORES_REQUEST,
  FETCH_STORES_SUCCESS,
} from '../constants/Stores';

import Stores from '../../config/api/Stores';

const fetchStoresRequest = () => ({
  type: FETCH_STORES_REQUEST,
});

const fetchStoresSuccess = payload => ({
  type: FETCH_STORES_SUCCESS,
  payload,
});

const fetchStoresFailure = payload => ({
  type: FETCH_STORES_FAILURE,
  payload,
});

const fetchStores = (params, dispatch) => {
  dispatch(fetchStoresRequest());

  Stores.get({
    variables: {
      algorithm: 'NEAREST',
      lat: params.lat,
      long: params.long,
      now: params.now,
    },
  }).then((response) => {
    dispatch(fetchStoresSuccess(response.data));
  }).catch(() => {
    dispatch(fetchStoresFailure());
  });
};

export const actionFetchStores = params => dispatch => fetchStores(params, dispatch);
