import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Heading from '../../Atoms/Heading';
import Paragraph from '../../Atoms/Paragraph';
import Button from '../../Atoms/Button';

const ButtonAndroid = styled(Button)`
  background-color: ${designSystem.color.brandAndroid};
  border-color: ${designSystem.color.brandAndroid};
  margin: 0 ${designSystem.size.base};
`;

const ButtonApple = styled(Button)`
  background-color: ${designSystem.color.brandApple};
  border-color: ${designSystem.color.brandApple};
  margin: 0 ${designSystem.size.base};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${designSystem.size.m};
`;

const AppHightlightContainer = styled.div`
  background-color: ${designSystem.color.grayLighter};
  padding: ${designSystem.size.l};
  text-align: center;
`;

const AppHighlight = () => (
  <AppHightlightContainer>
    <Heading as="h3">Baixe nosso app</Heading>
    <Paragraph>Disponível para Android e IOS.</Paragraph>
    <ButtonContainer>
      <ButtonAndroid size="small" color="default">Google Play</ButtonAndroid>
      <ButtonApple size="small" color="default">App Store</ButtonApple>
    </ButtonContainer>
  </AppHightlightContainer>
);

export default AppHighlight;
