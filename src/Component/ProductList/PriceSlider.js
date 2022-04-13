import React from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const PriceSlider = ({ onFilterPrice, filteredMaxPrice, filteredMinPrice }) => {
  const changePriceHandler = event => {
    onFilterPrice(event.target.value);
  };

  return (
    <React.Fragment>
      <TitleString>
        <TypeString>Price Range</TypeString>
        <CurrencyString>KRW</CurrencyString>
      </TitleString>
      <PriceString>
        <span>₩{filteredMinPrice}</span>
        <span>
          {filteredMaxPrice >= 500000
            ? `₩${filteredMaxPrice}+`
            : `₩${filteredMaxPrice}`}
        </span>
      </PriceString>
      <WinePriceSlider
        value={[filteredMinPrice, filteredMaxPrice]}
        onChange={changePriceHandler}
        max={200000}
        min={0}
        step={10}
        disableSwap
      />
    </React.Fragment>
  );
};

export default PriceSlider;

const WinePriceSlider = styled(Slider)(({ theme }) => ({
  width: '97%',
  color: theme.colors.vintageRed,

  '& .MuiSlider-rail': {
    opacity: 0.8,
    backgroundColor: '#e3ddd8',
  },
}));

const PriceString = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CurrencyString = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
`;

const TypeString = styled.span`
  font-size: 25px;
`;

const TitleString = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.5vh;
  width: 100%;
`;
