import React from 'react';
import styled from 'styled-components';
import designSystem from 'designSystem';

import Icon from '../../Atoms/Icon';

const StoresList = styled.ul``;

const StoreItem = styled.li`
  border-radius: ${designSystem.size.s};
  border: 1px solid ${designSystem.color.gray};
  background-color: ${designSystem.color.white};
  padding: ${designSystem.size.base};
`;

const StoreIcon = styled(Icon)`
  margin-right: ${designSystem.size.s};
`;

const Stores = ({ stores, selectStore }) => (
  <StoresList>
    {stores.map(item => (
      <StoreItem onClick={() => selectStore(item)} key={item.id}>
        <StoreIcon name="faStoreAlt" />
        {item.tradingName}
      </StoreItem>
    ))}
  </StoresList>
);

export default Stores;
