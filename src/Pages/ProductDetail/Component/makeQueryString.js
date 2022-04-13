const makeQueryString = obj => {
  switch (Object.keys(obj)[0]) {
    case 'type':
      return `product?type=${Object.values(obj)}`;
    case 'winery':
      return `product?winery=${Object.values(obj)}`;
    case 'grape':
      return `product?grape=${Object.values(obj)}`;
    case 'country':
      return `product?country=${Object.values(obj)}`;
    case 'pairs':
      return `product?pairing=${Object.values(obj)}`;
    default:
  }
};

export default makeQueryString;
