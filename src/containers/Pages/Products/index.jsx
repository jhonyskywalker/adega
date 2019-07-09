import { connect } from 'react-redux';
import { actionFetchProducts, actionManageProduct } from 'redux-flow/actions/Products';
import { actionFetchCategories } from 'redux-flow/actions/Categories';

import Products from '../../../components/Pages/Products';

const mapStateToProps = ({
  products,
  categories,
}) => ({
  products,
  categories,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: params => dispatch(actionFetchProducts(params)),
  fetchCategories: params => dispatch(actionFetchCategories(params)),
  manageProduct: params => dispatch(actionManageProduct(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
