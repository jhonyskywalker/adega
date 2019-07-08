import { createGlobalStyle } from 'styled-components';
import designSystem from 'designSystem';

export default createGlobalStyle`
  body {
    background-color: ${designSystem.color.yellowLight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${designSystem.font.family.primary};
  }

  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;
