import React, { Component } from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Heading from '../../Atoms/Heading';
import Paragraph from '../../Atoms/Paragraph';
import Image from '../../Atoms/Image';
import Amount from '../../Molecules/Amount';

const ProductsContainer = styled.div`
  margin: 0 auto;
  max-width: 870px;
`;

const ProductsHeader = styled.div`
  margin: ${designSystem.size.l} ${designSystem.size.s};
`;

const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const ProductItem = styled.li`
  background-color: ${designSystem.color.white};
  border-radius: ${designSystem.size.s};
  margin: ${designSystem.size.s};
  padding: ${designSystem.size.m};
  width: 200px;
`;

class Products extends Component {
  onlyNumber = value => /^\d*\.?\d*$/.test(value)

  add = (params) => {
    this.props.manageProduct({
      ...params,
      amount: params.amount += 1,
    });
  }

  remove = (params) => {
    if (params.amount > 0) {
      this.props.manageProduct({
        ...params,
        amount: params.amount -= 1,
      });
    }
  }

  insert = (event, params) => {
    const value = event.target.value;

    if (this.onlyNumber(value)) {
      this.props.manageProduct({
        ...params,
        amount: parseInt(value),
      });
    }
  }

  render() {
    return (
      <ProductsContainer>
        <ProductsHeader>
          <Heading as="h3">Produtos</Heading>
          <Paragraph>Selecione tudo que precisa.</Paragraph>
        </ProductsHeader>

        <ProductsList>
          {this.props.products.map(item => (
            <ProductItem key={item.productVariants[0].productVariantId}>
              <Image url={item.productVariants[0].imageUrl} />
              <Paragraph>{item.productVariants[0].title}</Paragraph>
              <Paragraph size="large">
                <Paragraph as="span" size="medium" color="gray">R$ </Paragraph>
                <Paragraph as="span">{item.productVariants[0].price}</Paragraph>
              </Paragraph>
              <Amount
                product={item.productVariants[0]}
                add={this.add}
                remove={this.remove}
                insert={this.insert}
              />
            </ProductItem>
          ))}
        </ProductsList>
      </ProductsContainer>
    );
  }
}

export default Products;
