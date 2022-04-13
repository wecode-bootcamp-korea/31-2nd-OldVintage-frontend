import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const WinePriceSlider = styled(Slider)`
  width: 97%;
  color: ${({ theme }) => theme.colors.vintageRed};
`;

const PriceString = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CurrencyString = styled.span``;

const TypeString = styled.span``;

const TitleString = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.5vh;
  width: 100%;
  ${TypeString} {
    font-size: 25px;
  }
  ${CurrencyString} {
    display: flex;
    align-items: flex-end;
    font-size: 12px;
  }
`;

const MinPrice = styled.span``;

const MaxPrice = styled.span``;

const PriceSlider = () => {
  const [sliderNowPrice, setSliderNowPrice] = useState([0, 500000]);

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
        <MinPrice>₩{sliderNowPrice[0]}</MinPrice>
        <MaxPrice>
          {sliderNowPrice[1] >= 500000
            ? `₩${sliderNowPrice[1]}+`
            : `₩${sliderNowPrice[1]}`}
        </MaxPrice>
      </PriceString>
      <WinePriceSlider
        value={[sliderNowPrice[0], sliderNowPrice[1]]}
        onChange={changePriceHandler}
        max={500000}
        min={0}
        disableSwap
      />
    </React.Fragment>
  );
};

export default PriceSlider;
