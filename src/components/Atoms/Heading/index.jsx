import PropTypes from 'prop-types';
import styled from 'styled-components';

import designSystem from 'designSystem';
import headingByProps from './headingByProps';

const Heading = styled.h1`
  ${headingByProps}
  color: ${props => (props.color ? designSystem.color[props.color] : designSystem.color.black)};
`;

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a']),
  color: PropTypes.string,
};

export default Heading;
