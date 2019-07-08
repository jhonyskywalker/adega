import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Paragraph from '../../Atoms/Paragraph';
import Image from '../../Atoms/Image';
import Amount from '../../Molecules/Amount';

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

const Products = ({ products }) => (
  <ProductsList>
    {products.map(item => (
      <ProductItem key={item.productVariants[0].productVariantId}>
        <Image url={item.productVariants[0].imageUrl} />
        <Paragraph>{item.productVariants[0].title}</Paragraph>
        <Paragraph size="large">
          <Paragraph as="span" size="medium" color="gray">R$ </Paragraph>
          <Paragraph as="span">{item.productVariants[0].price}</Paragraph>
        </Paragraph>
        <Amount />
      </ProductItem>
    ))}
  </ProductsList>
);

export default Products;
