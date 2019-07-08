import styled from 'styled-components';

import designSystem from 'designSystem';
import size from './size';

const Paragraph = styled.p`
  ${size}
  color: ${props => (props.color ? designSystem.color[props.color] : designSystem.color.black)};
`;

export default Paragraph;
