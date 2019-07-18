import React, { Component } from 'react';

import TemplateMain from '../../Templates/Main';
import Categories from '../../Organisms/Categories';
import Products from '../../Organisms/Products';

class ProductsPage extends Component {
  componentDidMount() {
    this.fetchProducts({
      id: this.props.match.params.id,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.fetchProducts({
        id: nextProps.match.params.id,
      });
    }
  }

  fetchProducts = (params) => {
    this.props.fetchProducts(params);
    this.props.fetchCategories();
  }

  render() {
    return (
      <TemplateMain>
        {/* <Categories categories={this.props.categories.payload.allCategory} /> */}

        <Products
          products={this.props.products}
          manageProduct={this.props.manageProduct}
        />
      </TemplateMain>
    );
  }
}

export default ProductsPage;
