import {
  combineReducers,
} from 'redux';

import {
  connectRouter,
} from 'connected-react-router';

import places from './Places';
import stores from './Stores';
import products from './Products';
import categories from './Categories';
import session from './Session';

export default history => combineReducers({
  places,
  stores,
  products,
  categories,
  session,
  router: connectRouter(history),
});
