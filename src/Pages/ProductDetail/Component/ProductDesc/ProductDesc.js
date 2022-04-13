import React from 'react';
import { Link } from 'react-router-dom';
import ProductFeatures from './ProductFeatures/ProductFeatures';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const ProductDesc = ({ product, wineryName, country }) => {
  const { name, price, rating, rating_count, image, type, grape, pairings } =
    product;

  const pairs = pairings.map(pairing => ({ pairing: Object.keys(pairing) }));

  const productFeatures = [{ name }, { type }, { grape }, { country }].concat(
    pairs
  );

  return (
    <Background>
      <ProductImg alt="와인이미지" src={image} />
      <FlexColumn>
        <FlexColumn>
          <WineryLink to={`/product?winery=${wineryName}`}>
            {wineryName}
          </WineryLink>
          <h1>{name}</h1>
        </FlexColumn>
        <Features>
          {productFeatures.map((feature, index) => (
            <ProductFeatures key={index} feature={feature} />
          ))}
        </Features>
        <RatingWrapper>
          <h2>{rating}</h2>
          <FlexColumn>
            <RatingStar value={parseInt(rating)} precision={0.5} readOnly />
            <span>{rating_count} reviews</span>
          </FlexColumn>
        </RatingWrapper>
        <WishList>
          <BookmarkBorderIcon />
          <span>Add to Wishlist</span>
        </WishList>
      </FlexColumn>
      <PriceTag>
        <h1>₩{price}</h1>
        <span>Average of all users-reported prices</span>
      </PriceTag>
    </Background>
  );
};

export default ProductDesc;

const Background = styled.div`
  ${({ theme }) => theme.flexSet('row', 'center', '')}
  flex-wrap: wrap;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-size: ${({ theme }) => theme.fontSize.large};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

const ProductImg = styled.img`
  width: 250px;
  height: 450px;
`;

const FlexColumn = styled.div`
  ${({ theme }) => theme.flexSet('column', '', '')}
`;

const WineryLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-decoration: none;
  color: black;
`;

const RatingWrapper = styled.div`
  ${({ theme }) => theme.flexSet('row', '', 'center')}
  margin-top : 30px;
  font-size: ${({ theme }) => theme.fontSize.medium};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
  h2::after {
    content: '';
    margin-right: 10px;
  }
`;

const RatingStar = styled(Rating)`
  color: ${({ theme }) => theme.colors.vintageRed};
`;

const Features = styled.ul`
  ${({ theme }) => theme.flexSet('row', '', '')};
  flex-wrap: wrap;
  max-width: 400px;

  li::after {
    content: '·';
    margin: 20px;
  }
`;

const WishList = styled.div`
  ${({ theme }) => theme.flexSet('row', '', 'center')}
  margin-top: 30px;
`;

const PriceTag = styled.div`
  ${({ theme }) => theme.flexSet('column', '', '')}
  margin:20px;
  padding: 20px;
  background-color: white;
  max-height: 150px;
  box-shadow: 0px 2px 2px 2px gray;
`;
