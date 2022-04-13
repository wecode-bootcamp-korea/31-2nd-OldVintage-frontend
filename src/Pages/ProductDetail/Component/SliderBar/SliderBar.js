import * as React from 'react';
import styled from 'styled-components';
import { Slider } from '@mui/material';

const SliderBar = ({ product }) => {
  const { bold, tannic, sweet, acidic } = product;
  const tasteFeatures = [{ bold }, { tannic }, { sweet }, { acidic }];
  const rateToSliderNum = num => {
    return [85 * num, 85 * num + 15];
  };
  return (
    <>
      {tasteFeatures.map((feature, index) => (
        <SliderWrapper key={index}>
          <h2>{Object.keys(feature)}less</h2>
          <FlavorSlider
            defaultValue={rateToSliderNum(Object.values(feature))}
          />
          <h2>{Object.keys(feature)}ful</h2>
        </SliderWrapper>
      ))}
    </>
  );
};

export default SliderBar;

const SliderWrapper = styled.div`
  ${({ theme }) => theme.flexSet('row', '', 'center')}
  padding:1vw;

  h2 {
    width: 7vw;
  }
`;

const FlavorSlider = styled(Slider)(({ theme }) => ({
  color: theme.colors.vintageRed,
  margin: '1vw',
  width: '40vw',
  height: '1vw',
  '& .MuiSlider-thumb': {
    height: 0,
    width: 0,
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#e3ddd8',
  },
  pointerEvents: 'none',
}));
