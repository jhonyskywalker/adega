import {
  createBrowserHistory,
} from 'history';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {
  routerMiddleware,
} from 'connected-react-router';
import {
  composeWithDevTools,
} from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';
import createRootReducer from 'redux-flow/reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
      ),
    ),
  );

  return store;
}
