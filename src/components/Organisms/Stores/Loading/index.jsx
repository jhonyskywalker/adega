import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

import Skeleton from '../../../Atoms/Skeleton';

const LoadingContainer = styled.div``;

const Title = styled(Skeleton)`
  margin: 0 auto;
`;

const StoresContainer = styled.div`
  padding: ${designSystem.size.l};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StoreItem = styled(Skeleton)`
  margin: ${designSystem.size.m};
`;

const Loading = () => (
  <LoadingContainer>
    <Title width="300px" height="30px" />

    <StoresContainer>
      <StoreItem width="300px" height="200px" />
      <StoreItem width="300px" height="200px" />
      <StoreItem width="300px" height="200px" />
    </StoresContainer>
  </LoadingContainer>
);

export default Loading;
