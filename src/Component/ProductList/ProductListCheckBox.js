import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import theme from '../../style/Theme';

const CheckBoxTitle = styled.span`
  display: flex;
  width: 100%;
  margin: 3vh 0 0 0;
  font-size: 23px;
  font-weight: bold;
`;

const GroupForm = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1vh 0 2vh 0;
  border: 1px solid rgb(188, 188, 188, 0.7);
  border-width: 0 0 1px 0;
`;

const ProductListCheckBox = ({ filterData, title }) => {
  // const [temp, setTemp] = useState();

  // const testHandler = event => {
  // const { value, checked } = event.target;
  // console.log(JSON.stringify(value));
  // if (checked) {
  //   setTemp(prev => {
  //     return { ...prev, [value[0]]: value[1] };
  //   });
  // }
  // };

  // useEffect(() => {
  //   console.log(temp);
  // }, [temp]);

  return (
    <React.Fragment>
      <CheckBoxTitle>{title}</CheckBoxTitle>
      <GroupForm>
        {filterData.map(wineType => (
          <FormControlLabel
            key={wineType.id}
            control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: theme.colors.vintageRed,
                  },
                }}
              />
            }
            label={wineType.info}
            value={wineType.info}
            // onChange={testHandler}
          />
        ))}
      </GroupForm>
    </React.Fragment>
  );
};

export default ProductListCheckBox;
