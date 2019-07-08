import React from 'react';

import InputContainer from '../InputContainer';
import InputText from '../InputText';
import Icon from '../Icon';

const Input = props => (
  <InputContainer {...props}>
    <InputText {...props} />

    {props.icon && <Icon {...props} name={props.icon} />}
  </InputContainer>
)

export default Input;
