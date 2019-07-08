import { css } from 'styled-components';
import designSystem from '../../../designSystem';

const headingByProps = (props) => {
  const options = {
    h1: css`
      font-size: ${designSystem.size.xxl};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h2: css`
      font-size: ${designSystem.size.xl};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h3: css`
      font-size: ${designSystem.size.l};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h4: css`
      font-size: ${designSystem.size.xxm};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h5: css`
      font-size: ${designSystem.size.xm};
      font-weight: ${designSystem.font.weight.bold};
    `,
    h6: css`
      font-size: ${designSystem.size.m};
      font-weight: ${designSystem.font.weight.bold};
    `,
  };

  return options[props.as];
};

export default headingByProps;
