import * as React from 'react';
import styled from 'styled-components';
import { Slider } from '@mui/material';

const rate = 0.25;

const rateToSliderNum = num => {
  return [85 * num, 85 * num + 15];
};
const SliderBar = () => {
  return (
    <SliderWrapper>
      <span>Light받아올예정</span>
      <FlavorSlider defaultValue={rateToSliderNum(rate)} />
      <span>Bold받아올예정</span>
    </SliderWrapper>
  );
};

export default SliderBar;

const SliderWrapper = styled.div`
  ${({ theme }) => theme.flexSet('row', '', 'center')}
  margin :20px 0;

  span {
  }
`;
const FlavorSlider = styled(Slider)(({ theme }) => ({
  color: theme.colors.vintageRed,
  margin: 20,
  width: 450,
  height: 5,
  '& .MuiSlider-thumb': {
    height: 0, //슬라이더 원형 홀더 사이즈 조정
    width: 0,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#e3ddd8',
  },
  pointerEvents: 'none',
}));
