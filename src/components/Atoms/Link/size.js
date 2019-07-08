import { css } from 'styled-components';
import designSystem from 'designSystem';

const size = (props) => {
  const options = {
    default: css`
      font-size: inherit;
    `,
    small: css`
      font-size: ${designSystem.size.s};
    `,
    medium: css`
      font-size: ${designSystem.size.m};
    `,
    large: css`
      font-size: ${designSystem.size.xm};
    `,
  };

  return props.size ? options[props.size] : options.default;
};

export default size;
