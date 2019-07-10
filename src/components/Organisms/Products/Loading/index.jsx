import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Skeleton from '../../../Atoms/Skeleton';

const LoadingContainer = styled.div`
  margin: 0 auto;
  max-width: 870px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const Item = styled(Skeleton)`
  margin: ${designSystem.size.s};
`;

const Loading = () => (
  <LoadingContainer>
    <Content>
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
      <Item width="200px" height="350px" />
    </Content>
  </LoadingContainer>
);

export default Loading;
