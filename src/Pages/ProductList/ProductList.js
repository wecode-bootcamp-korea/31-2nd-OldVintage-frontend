import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PriceSlider from '../../Component/ProductList/PriceSlider';
import ProductSortSelector from '../../Component/ProductList/ProductSortSelector.js';
import ProductListCheckBox from '../../Component/ProductList/ProductListCheckBox';
import ProductListRatingFilter from '../../Component/ProductList/ProductListRatingFilter';
import ProductListWine from '../../Component/ProductList/ProductListWine';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from './hooks/useDebounce';
import {
  QUERY_FILTER_CONDITION,
  FILTER_CHECKBOX_CATEGORY,
} from './DATA/PRODUCT_LIST_FILTER';
import API from '../../config';

const makeQueryString = (usingState, queryKey) => {
  return usingState.map(
    checkedType => `&${queryKey}=${QUERY_FILTER_CONDITION[checkedType]}`
  );
};

const ProductList = () => {
  const [filterWineType, setFilterWineType] = useState([]);
  const [filterGrapeType, setFilterGrapeType] = useState([]);
  const [filterWineryType, setFilterWineryType] = useState([]);
  const [filterCountryType, setFilterCountryType] = useState([]);
  const [filterFoodPairingType, setFilterFoodPairingType] = useState([]);

  const [wineCardListData, setWineCardListData] = useState([]);
  const [hasInfiniteScrollMore, setHasInfiniteScrollMore] = useState(true);
  const [listFetchOffset, setListFetchOffset] = useState(5);

  const [fullListItemLength, setFullListItemLength] = useState();
  const [sortButtonFilter, setSortButtonFilter] = useState('');
  const [ratingButtonFilterNumb, setRatingButtonFilterNumb] = useState('1');
  const [filterePrice, setFilterePrice] = useState([0, 200000]);
  const [filteredMinPrice, filteredMaxPrice] = filterePrice;

  const newWineTypeArray = makeQueryString(filterWineType, 'type_id');
  const newGrapeTypeArray = makeQueryString(filterGrapeType, 'grape_id');
  const newWineryTypeArray = makeQueryString(filterWineryType, 'winery_id');
  const newCountryTypeArray = makeQueryString(filterCountryType, 'country_id');
  const newFoodPairingTypeArray = makeQueryString(
    filterFoodPairingType,
    'pairing_id'
  );

  const debouncedSliderFetchRequest = useDebounce(filterePrice, 100);
  const [debouncedMinPrice, debouncedMaxPrice] = debouncedSliderFetchRequest;

  const queryStringWineType =
    `&min_price=${debouncedMinPrice}&max_price=${debouncedMaxPrice}` +
    `&rating=${ratingButtonFilterNumb}` +
    `&order=${sortButtonFilter}` +
    newWineTypeArray.join('') +
    newGrapeTypeArray.join('') +
    newWineryTypeArray.join('') +
    newCountryTypeArray.join('') +
    newFoodPairingTypeArray.join('');

  useEffect(() => {
    const getWineCardListFromServer = async () => {
      const res = await fetch(
        `${API.productList}?offset=0&limit=5${queryStringWineType}`,
        {
          method: 'GET',
        }
      );
      const data = await res.json();
      setWineCardListData(data.result);
      setFullListItemLength(data.length);
    };

    getWineCardListFromServer();
  }, [
    filterWineType,
    filterGrapeType,
    filterWineryType,
    filterCountryType,
    filterFoodPairingType,
    queryStringWineType,
  ]);

  const fetchMoreWineList = async () => {
    const res = await fetch(
      `${API.productList}?offset=${listFetchOffset}&limit=5${queryStringWineType}`,
      {
        method: 'GET',
      }
    );
    const data = await res.json();
    return data.result;
  };

  const fetchData = async () => {
    const mortWineListFromServer = await fetchMoreWineList();
    setWineCardListData([...wineCardListData, ...mortWineListFromServer]);

    if (wineCardListData.length > 51 || mortWineListFromServer.length === 0) {
      setHasInfiniteScrollMore(false);
    }

    setListFetchOffset(listFetchOffset + 5);
  };

  const sortBtnFilterHandler = input => {
    setSortButtonFilter(input);
  };

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <InfiniteScroll
      dataLength={wineCardListData.length}
      next={fetchData}
      hasMore={hasInfiniteScrollMore}
    >
      <ProdcutListWrapper>
        <ProductListInner>
          <ProductListSummaryArea>
            <span>{`showing ${fullListItemLength} wines, between ₩${filteredMinPrice} - ₩${filteredMaxPrice} , rated above ${ratingButtonFilterNumb} stars`}</span>
          </ProductListSummaryArea>

          <ProductListTopArea>
            <ProductSortSelector
              sortButtonFilter={sortButtonFilter}
              onSetSortBtnFilter={sortBtnFilterHandler}
            />
          </ProductListTopArea>

          <ProdcutListMainArea>
            <ProductListLeftArea>
              <PriceSlider
                onFilterPrice={setFilterePrice}
                filteredMinPrice={filteredMinPrice}
                filteredMaxPrice={filteredMaxPrice}
              />
              <ProductListRatingFilter
                onSetRatingButtonNumb={setRatingButtonFilterNumb}
              />
              {FILTER_CHECKBOX_CATEGORY.map(({ id, title, filterData }) => (
                <ProductListCheckBox
                  key={id}
                  filterData={filterData}
                  infoType={filterData[0].infoType}
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
    </InfiniteScroll>
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
