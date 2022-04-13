import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Slider } from '@mui/material';

const WineTasteSlider = ({ bold, tannic, sweet, acidic }) => {
  return (
    <TasteSliderBox>
      <Box sx={{ width: 300 }}>
        <Typography gutterBottom>{`bold : ${Math.ceil(
          bold * 100
        )}%`}</Typography>
        <TasteSlider variant="determinate" value={bold * 100} />
        <Typography gutterBottom>{`tannic : ${Math.ceil(
          tannic * 100
        )}%`}</Typography>
        <TasteSlider variant="determinate" value={tannic * 100} />
        <Typography gutterBottom>{`sweet : ${Math.ceil(
          sweet * 100
        )}%`}</Typography>
        <TasteSlider variant="determinate" value={sweet * 100} />
        <Typography gutterBottom>{`acidic : ${Math.ceil(
          acidic * 100
        )}`}</Typography>
        <TasteSlider variant="determinate" value={acidic * 100} />
      </Box>
    </TasteSliderBox>
  );
};

export default WineTasteSlider;

const TasteSliderBox = styled.div`
  margin: 2vh 0 0 0;
`;

const TasteSlider = styled(Slider)(({ theme }) => ({
  width: '22vw',
  margin: '0 0 1vh 0',
  color: theme.colors.vintageRed,
  pointerEvents: 'none',
  '& .MuiSlider-thumb': {
    height: 0,
    width: 0,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#e3ddd8',
  },
}));
