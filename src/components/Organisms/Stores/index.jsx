import React from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';

const StoreContent = styled.div`
  text-align: center;
  margin-top: ${designSystem.size.l};
`;

const StoresList = styled.ul`
  padding: ${designSystem.size.l};
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StoreTitle = styled(Heading)`
  margin: ${designSystem.size.m};
`;

const StoreItem = styled.li`
  border-radius: ${designSystem.size.s};
  background-color: ${designSystem.color.white};
  padding: ${designSystem.size.m};
  margin: ${designSystem.size.m};
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const StoreItemTitle = styled(Heading)`
  margin-bottom: ${designSystem.size.m};
`;

const Stores = ({ stores, selectStore }) => (
  <StoreContent>
    {(stores.length > 0) && <StoreTitle>Escolha o fornecedor.</StoreTitle>}

    <StoresList>
      {stores.map(item => (
        <StoreItem onClick={() => selectStore(item)} key={item.id}>
          <StoreItemTitle as="h6">{item.tradingName}</StoreItemTitle>
          <Button size="medium" color="secondary">Ver produtos</Button>
        </StoreItem>
      ))}
    </StoresList>
  </StoreContent>
);

export default Stores;
