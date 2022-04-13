import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const PriceSlider = () => {
  const [sliderNowPrice, setSliderNowPrice] = useState([0, 500000]);
  const [minPrice, maxPrice] = sliderNowPrice;

  const changePriceHandler = event => {
    setSliderNowPrice(event.target.value);
  };

  return (
    <React.Fragment>
      <TitleString>
        <TypeString>Price Range</TypeString>
        <CurrencyString>KRW</CurrencyString>
      </TitleString>
      <PriceString>
        <span>₩{minPrice}</span>
        <span>{maxPrice >= 500000 ? `₩${maxPrice}+` : `₩${maxPrice}`}</span>
      </PriceString>
      <WinePriceSlider
        value={[minPrice, maxPrice]}
        onChange={changePriceHandler}
        max={500000}
        min={0}
        disableSwap
      />
    </React.Fragment>
  );
};

export default PriceSlider;

const WinePriceSlider = styled(Slider)`
  width: 97%;
  color: ${({ theme }) => theme.colors.vintageRed};
`;

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
