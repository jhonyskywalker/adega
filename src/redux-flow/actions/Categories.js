import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from '../constants/Categories';

import Categories from '../../config/api/Categories';

const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

const fetchCategoriesSuccess = payload => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

const fetchCategoriesFailure = payload => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});

const fetchCategories = (params, dispatch) => {
  dispatch(fetchCategoriesRequest());

  Categories.get().then((response) => {
    dispatch(fetchCategoriesSuccess(response.data));
  }).catch(() => {
    dispatch(fetchCategoriesFailure());
  });
};

export const actionFetchCategories = params => dispatch => fetchCategories(params, dispatch);
