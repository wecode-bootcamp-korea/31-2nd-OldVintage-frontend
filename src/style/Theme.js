const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

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

const font = {
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
  large: '40px',
  medium: '20px',
  small: '8px',
  tiny: '4px',
};
const theme = {
  flexSet,
  flexColumnSet,
  colors,
  font,
};

export default theme;
