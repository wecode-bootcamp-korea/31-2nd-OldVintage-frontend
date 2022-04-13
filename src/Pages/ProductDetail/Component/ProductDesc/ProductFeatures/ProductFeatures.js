import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import makeQueryString from '../../makeQueryString';

const ProductFeatures = ({ feature }) => {
  const query = makeQueryString(feature);

  return (
    <li>
      <DecolessLink to={'/' + query}>
        <span>{Object.values(feature)}</span>
      </DecolessLink>
    </li>
  );
};

export default ProductFeatures;

const DecolessLink = styled(Link)`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.small};
`;
