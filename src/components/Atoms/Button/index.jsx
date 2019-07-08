import styled from 'styled-components';

import { fluid, getColorSettingsByProperty } from '../../../utils';
import size from './size';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0;
  position: relative;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 4px;
  color: ${props => getColorSettingsByProperty(props, 'text')};
  background-color: ${props => getColorSettingsByProperty(props, 'background')};
  border-color: ${props => getColorSettingsByProperty(props, 'background')};
  cursor: pointer;
  overflow: hidden;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    opacity: 0.3;
    background-color: ${props => getColorSettingsByProperty(props, 'borderFocus')};
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${props => getColorSettingsByProperty(props, 'backgroundHover')};
    border-color: ${props => getColorSettingsByProperty(props, 'backgroundHover')};
  }

  &:active {
    background-color: ${props => getColorSettingsByProperty(props, 'backgroundActive')};
    border-color: ${props => getColorSettingsByProperty(props, 'backgroundActive')};
  }

  &:focus {
    background-color: ${props => getColorSettingsByProperty(props, 'background')};
    border-color: ${props => getColorSettingsByProperty(props, 'borderFocus')};
  }

  &:focus:before,
  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.4s ease-out, padding-top 0.4s ease-out;
  }

  &:disabled {
    background: #fff;
    border-color: #fff;
    color: #000;
    opacity: 0.1;
    cursor: not-allowed;
  }

  ${size};
  ${fluid}
`;

export default Button;
