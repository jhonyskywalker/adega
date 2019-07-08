import styled from 'styled-components';

import designSystem from 'designSystem';
import size from './size';

const Link = styled.a`
  ${size}
  color: ${props => (props.color ? designSystem.color[props.color] : designSystem.color.black)};
`;

export default Link;
