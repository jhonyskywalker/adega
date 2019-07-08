import color from '../color';

export default {
  default: {
    text: color.white,
    background: color.grayDark,
    backgroundHover: color.grayLight,
    backgroundActive: color.grayDark,
    borderFocus: color.grayDark,
  },
  white: {
    text: color.purple,
    background: color.white,
    backgroundHover: color.grayLighter,
    backgroundActive: color.white,
    borderFocus: color.grayLight,
  },
  gray: {
    text: color.purple,
    background: color.grayLightest,
    backgroundHover: color.grayLighter,
    backgroundActive: color.grayLight,
    borderFocus: color.purpleDark,
  },
  green: {
    text: color.gray,
    background: color.green,
    backgroundHover: color.greenLight,
    backgroundActive: color.greenDark,
    borderFocus: color.greenDark,
  },
  purple: {
    text: color.white,
    background: color.purple,
    backgroundHover: color.purpleLight,
    backgroundActive: color.purpleDark,
    borderFocus: color.purpleDark,
  },
};
