import React, { useEffect, useState } from 'react';
import SliderBar from './Component/SliderBar/SliderBar';
import ProductDesc from './Component/ProductDesc/ProductDesc';
import styled from 'styled-components';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [winery, setWinery] = useState({});

  useEffect(() => {
    fetch('http://10.58.6.19:8000/products/1')
      .then(response => response.json())
      .then(data => {
        setProduct(data.product_detail.product);
        setWinery(data.product_detail.winery);
      });
  }, []);

  return (
    <div>
      {product.name && (
        <ProductDesc
          product={product}
          wineryName={winery.name}
          country={winery.country}
        />
      )}
      <TasteWrapper>
        <FlexRow>
          <FlexColumn>
            <TasteQuestion>What does this wine taste like?</TasteQuestion>
            {product.bold && <SliderBar product={product} winery={winery} />}
          </FlexColumn>
          <TasteSummary>
            <h2>WINE LOVERS TASTE SUMMARY</h2>
            <span>
              The taste profile of {product.name && product.name}
              is based on {product.rating_count && product.rating_count} user
              reviews
            </span>
          </TasteSummary>
        </FlexRow>
      </TasteWrapper>
    </div>
  );
};

export default ProductDetail;

const TasteWrapper = styled.section`
  ${({ theme }) => theme.flexSet('column', '', 'center')}
  flex-wrap: wrap;
`;

const FlexColumn = styled.div`
  ${({ theme }) => theme.flexSet('column', '', '')}
`;

const FlexRow = styled.section`
  ${({ theme }) => theme.flexSet('row', '', '')}
`;

const TasteQuestion = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const TasteSummary = styled.div`
  margin: 70px 0 0 40px;
  max-width: 400px;
  h2 {
    font-size: 20px;
  }
`;
