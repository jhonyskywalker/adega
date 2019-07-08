import { connect } from 'react-redux';
import { actionFetchPlaces } from 'redux-flow/actions/Places';
import { actionFetchStores } from 'redux-flow/actions/Stores';
import { actionSaveSession } from 'redux-flow/actions/Session';

import Home from '../../../components/Pages/Home';

const mapStateToProps = ({
  places,
  stores,
  session,
}) => ({
  places,
  stores,
  session,
});

const mapDispatchToProps = dispatch => ({
  fetchPlaces: params => dispatch(actionFetchPlaces(params)),
  fetchStores: params => dispatch(actionFetchStores(params)),
  saveSession: params => dispatch(actionSaveSession(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
