import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Heading from '../../Atoms/Heading';
import Paragraph from '../../Atoms/Paragraph';

const Hightlight = styled.div`
  text-align: center;
  padding: ${designSystem.size.l} 0;

  ${Heading} {
    margin-bottom: ${designSystem.size.m};
  }
`;

const PageHighlight = () => (
  <Hightlight>
    <Heading as="h1">
      Delivery de bebidas
      <br />
      nunca foi tão fácil.
    </Heading>

    <Paragraph size="large">
      Encontre fornecedores perto de você.
    </Paragraph>
  </Hightlight>
);

export default PageHighlight;
