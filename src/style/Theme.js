const flexSet = (direction = 'row', just = 'center', align = 'center') =>
  `display: flex;
  flex-direction: ${direction};
  justify-content: ${just};
  align-items: ${align};`;

const colors = {
  vintageRed: '#ba1628',
  ratingRed: '#8c1a28',
  ratingOrange: '#f0a20a',
  background: '#fafafa',
  white: '#FFFFFF',
  green: '#009688',
  grey: 'rgba(196,196,196,0.3)',
  deepGrey: '#828282',
};

const fontSize = {
  large: '40px',
  medium: '20px',
  small: '8px',
  tiny: '4px',
};

const fontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};
const theme = {
  flexSet,
  colors,
  fontSize,
  fontWeight,
};

export default theme;
