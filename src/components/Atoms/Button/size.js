import { css } from 'styled-components';

const size = (props) => {
  const options = {
    small: css`
      height: 32px;
      min-width: 80px;
      font-size: 12px;
      padding: 0 8px;
    `,
    medium: css`
      height: 40px;
      min-width: 100px;
      font-size: 14px;
      padding: 0 16px;
    `,
    large: css`
      height: 56px;
      min-width: 120px;
      font-size: 16px;
      padding: 0 24px;
    `,
  };

  return props.size ? options[props.size] : options.medium;
};

export default size;
