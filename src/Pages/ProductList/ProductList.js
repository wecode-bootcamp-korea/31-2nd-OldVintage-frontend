import React, { useState } from 'react';

import styled from 'styled-components';
import { FILTER_CHECKBOX_CATEGORY } from './DATA/PRODUCT_LIST_FILTER';
import PriceSlider from '../../Component/ProductList/PriceSlider';
import ProductSortSelector from '../../Component/ProductList/ProductSortSelector.js';
import ProductListCheckBox from '../../Component/ProductList/ProductListCheckBox';
import ProductListRatingFilter from '../../Component/ProductList/ProductListRatingFilter';
import ProductListWine from '../../Component/ProductList/ProductListWine';

const ProdcutListWrapper = styled.div`
  ${({ theme }) => theme.flexSet('column', 'center', '')};
  background-color: ${({ theme }) => theme.colors.background};
`;

const ProductListInner = styled.div`
  padding: 10vh 18vw 2vh 18vw;
`;

const ProductListSummaryArea = styled.div`
  ${({ theme }) => theme.flexSet('column', 'center', 'center')};
  background-color: inherit;
  font-size: 22px;
  font-weight: 700;
`;

const ProductListTopArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2vh 0 2vh 0;
  width: 100%;
`;

const ProdcutListMainArea = styled.div`
  display: flex;
`;
const ProductListLeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;
const ProductListRightArea = styled.div`
  display: flex;
  justify-content: center;
  width: 68%;
  margin: 0 0 0 2%;
`;
/////////////////////////////

const ProductList = () => {
  return (
    <ProdcutListWrapper>
      <ProductListInner>
        <ProductListSummaryArea>
          <span>
            {/* {`showing N개 wines, between ₩${sliderNowPrice[0]} - ₩${sliderNowPrice[1]} rated above 4.2stars   `} */}
          </span>
        </ProductListSummaryArea>

        <ProductListTopArea>
          <h1>filter message</h1>
          <ProductSortSelector />
        </ProductListTopArea>

        <ProdcutListMainArea>
          <ProductListLeftArea>
            <PriceSlider />
            <ProductListRatingFilter />
            {FILTER_CHECKBOX_CATEGORY.map(({ id, title, filterData }) => (
              <ProductListCheckBox
                key={id}
                filterData={filterData}
                title={title}
              />
            ))}
          </ProductListLeftArea>

          <ProductListRightArea>
            <ProductListWine />
          </ProductListRightArea>
        </ProdcutListMainArea>
      </ProductListInner>
    </ProdcutListWrapper>
  );
};

export default ProductList;
