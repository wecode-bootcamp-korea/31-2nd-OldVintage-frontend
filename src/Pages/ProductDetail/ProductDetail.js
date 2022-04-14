import React from 'react';
import SliderBar from './Component/SliderBar/SliderBar';
import styled from 'styled-components';

const ProductDetail = () => {
  return (
    <TasteWrapper>
      <FlexRow>
        <FlexColumn>
          <TasteQuestion>What does this wine taste like?</TasteQuestion>
          <SliderBar />
        </FlexColumn>
        <TasteSummary>
          <h2>WINE LOVERS TASTE SUMMARY</h2>
          <span>
            The taste profile of "product_name" is based on "reviewer_sumTotal"
            user reviews
          </span>
        </TasteSummary>
      </FlexRow>
    </TasteWrapper>
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
