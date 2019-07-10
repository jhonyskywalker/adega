import React from 'react';
import styled from 'styled-components';

import designSystem from 'designSystem';

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${designSystem.size.base};
`;

const ActionButton = styled.button`
  width: ${designSystem.size.m};
  height: ${designSystem.size.m};
  color: ${designSystem.color.white};
  border: none;
  font-size: ${designSystem.size.base};
  border-radius: 50%;
  background-color: ${designSystem.color.green};
  font-weight: ${designSystem.font.weight.bold};
`;

const ActionInput = styled.input`
  width: 60px;
  text-align: center;
  font-size: ${designSystem.size.base};
  border-radius: ${designSystem.size.s};
  margin: 0 ${designSystem.size.m};
  border: 1px solid ${designSystem.color.green};
`;

const Amount = ({
  remove,
  insert,
  add,
  product
}) => (
  <AmountContainer>
    <ActionButton onClick={() => remove({ ...product })}>-</ActionButton>
    <ActionInput onChange={event => insert(event, { ...product })} type="text" value={product.amount} />
    <ActionButton onClick={() => add({ ...product })}>+</ActionButton>
  </AmountContainer>
);

export default Amount;
