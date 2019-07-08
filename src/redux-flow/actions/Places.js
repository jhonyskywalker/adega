import {
  FETCH_PLACES_FAILURE,
  FETCH_PLACES_REQUEST,
  FETCH_PLACES_SUCCESS,
} from '../constants/Places';

import Places from '../../config/api/Places';

const fetchPlacesRequest = () => ({
  type: FETCH_PLACES_REQUEST,
});

const fetchPlacesSuccess = payload => ({
  type: FETCH_PLACES_SUCCESS,
  payload,
});

const fetchPlacesFailure = payload => ({
  type: FETCH_PLACES_FAILURE,
  payload,
});

const fetchPlaces = (params, dispatch) => {
  dispatch(fetchPlacesRequest());

  Places.get({
    query: params.query,
  }).then((response) => {
    dispatch(fetchPlacesSuccess(response.data));
  }).catch(() => {
    dispatch(fetchPlacesFailure());
  });
};

export const actionFetchPlaces = params => dispatch => fetchPlaces(params, dispatch);
