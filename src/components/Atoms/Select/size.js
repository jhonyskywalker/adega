import { css } from 'styled-components';

const size = (props) => {
  const options = {
    small: css`
      height: 32px;
      width: 156px;
      padding: 0 8px;
      font-size: 12px;
    `,
    medium: css`
      height: 40px;
      width: 202px;
      padding: 0 16px;
      font-size: 14px;
    `,
    large: css`
      height: 56px;
      width: 248px;
      padding: 0 24px;
      font-size: 24px;
    `,
  };

  return props.size ? options[props.size] : options.medium;
};

export default size;
