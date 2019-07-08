import styled from 'styled-components';
import { fluid, getColorSettingsByProperty } from '../../../utils';
import size from './size';

const Select = styled.select`
  border: 1px solid;
  border-radius: 4px;
  border-color: ${props => getColorSettingsByProperty(props, 'background')};
  display: flex;
  align-items: center;

  ${size}
  ${fluid}
`;

export default Select;
