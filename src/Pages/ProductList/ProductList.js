import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FILTER_CHECKBOX_CATEGORY } from './DATA/PRODUCT_LIST_FILTER';
import PriceSlider from '../../Component/ProductList/PriceSlider';
import ProductSortSelector from '../../Component/ProductList/ProductSortSelector.js';
import ProductListCheckBox from '../../Component/ProductList/ProductListCheckBox';
import ProductListRatingFilter from '../../Component/ProductList/ProductListRatingFilter';
import ProductListWine from '../../Component/ProductList/ProductListWine';

const ProductList = () => {
  const [filterWineType, setFilterWineType] = useState([]);
  const [filterGrapeType, setFilterGrapeType] = useState([]);
  const [filterWineryType, setFilterWineryType] = useState([]);
  const [filterCountryType, setFilterCountryType] = useState([]);
  const [filterFoodPairingType, setFilterFoodPairingType] = useState([]);

  const [wineCardListData, setWineCardListData] = useState([]);

  const [sortButtonFilter, setSortButtonFilter] = useState('');
  const [ratingButtonFilterNumb, setRatingButtonFilterNumb] = useState('');

  const sortBtnFilterHandler = input => {
    setSortButtonFilter(input);
  };

  const getWineCardListData = () => {
    fetch('http://localhost:3000/data/tempmock.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setWineCardListData(res));
  };

  useEffect(() => {
    getWineCardListData();
  }, [
    filterWineType,
    filterGrapeType,
    filterWineryType,
    filterCountryType,
    filterFoodPairingType,
  ]);
  return (
    <ProdcutListWrapper>
      <ProductListInner>
        <ProductListSummaryArea>
          <span>{`showing ${wineCardListData.length} wines, rated above ${ratingButtonFilterNumb} stars`}</span>
        </ProductListSummaryArea>

        <ProductListTopArea>
          <ProductSortSelector
            sortButtonFilter={sortButtonFilter}
            onSetSortBtnFilter={sortBtnFilterHandler}
          />
        </ProductListTopArea>

        <ProdcutListMainArea>
          <ProductListLeftArea>
            <PriceSlider />
            <ProductListRatingFilter
              onSetRatingButtonNumb={setRatingButtonFilterNumb}
            />
            {FILTER_CHECKBOX_CATEGORY.map(({ id, title, filterData }) => (
              <ProductListCheckBox
                key={id}
                filterData={filterData}
                title={title}
                onSetWineTypeFilter={setFilterWineType}
                onSetGrapeTypeFilter={setFilterGrapeType}
                onSetWineryTypeFilter={setFilterWineryType}
                onSetCountryTypeFilter={setFilterCountryType}
                onSetFoodPairingTypeFilter={setFilterFoodPairingType}
              />
            ))}
          </ProductListLeftArea>

          <ProductListRightArea>
            <ProductListWine wineCardData={wineCardListData} />
          </ProductListRightArea>
        </ProdcutListMainArea>
      </ProductListInner>
    </ProdcutListWrapper>
  );
};

export default ProductList;

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
  justify-content: end;
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
