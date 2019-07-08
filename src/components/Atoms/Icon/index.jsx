import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as svgIcons from '@fortawesome/free-solid-svg-icons';

import designSystem from 'designSystem';
import { inherits } from 'util';

const IconMarkup = props => (
  <FontAwesomeIcon className={props.className} icon={svgIcons[props.name]} />
);

const Icon = styled(IconMarkup)`
  color: ${props => props.color ? designSystem.color[props.color] : designSystem.color.black};
  font-size: ${props => props.size ? designSystem.size[props.size] : `inherit`};
`;

export default Icon;
