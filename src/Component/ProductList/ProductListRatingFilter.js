import React from 'react';
import styled from 'styled-components';
import {
  Radio,
  Rating,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';

const RatingTotal = styled.div`
  display: flex;
  width: 100%;
  margin: 1vh 0 1vh 0;
`;

const RatingTitle = styled.span`
  width: 100%;
  margin: 3vh 0 0 0;
  font-size: 23px;
`;

const RatingFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelStar = styled(Rating)`
  width: 100%;
  color: ${({ theme }) => theme.colors.vintageRed};
`;

const ProductListRatingFilter = () => {
  return (
    <React.Fragment>
      <RatingTitle>Wevino Average Rating</RatingTitle>
      <RatingTotal>
        <RatingFormControl>
          <FormLabel id="demo-controlled-radio-buttons-group" />
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            <div>
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={
                  <LabelStar
                    name="read-only"
                    value={4}
                    precision={0.1}
                    readOnly
                  />
                }
              />
              <span>4.0+ Very Rare Stuff</span>
            </div>
            <div>
              <FormControlLabel
                value="3.5"
                control={<Radio />}
                label={
                  <LabelStar
                    name="read-only"
                    value={3.5}
                    precision={0.1}
                    readOnly
                  />
                }
              />
              <span>3.5+ Good Stuff</span>
            </div>
            <div>
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={
                  <LabelStar
                    name="read-only"
                    value={3}
                    precision={0.1}
                    readOnly
                  />
                }
              />
              <span>3.0+ Common Stuff</span>
            </div>
            <div>
              <FormControlLabel value="1" control={<Radio />} />
              <span>Anything Rating</span>
            </div>
          </RadioGroup>
        </RatingFormControl>
      </RatingTotal>
    </React.Fragment>
  );
};

export default ProductListRatingFilter;
