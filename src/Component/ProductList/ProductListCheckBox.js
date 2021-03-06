import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import theme from '../../style/Theme';
const ProductListCheckBox = ({
  filterData,
  title,
  infoType,
  onSetWineTypeFilter,
  onSetWineryTypeFilter,
  onSetCountryTypeFilter,
  onSetGrapeTypeFilter,
  onSetFoodPairingTypeFilter,
}) => {
  const [checkedInputs, setCheckedInputs] = useState([]);

  const filterCondtion = useMemo(() => {
    const condtion = {
      wineSort: function (input) {
        onSetWineTypeFilter(input);
      },
      winery: function (input) {
        onSetWineryTypeFilter(input);
      },
      country: function (input) {
        onSetCountryTypeFilter(input);
      },
      grape: function (input) {
        onSetGrapeTypeFilter(input);
      },
      foodPairing: function (input) {
        onSetFoodPairingTypeFilter(input);
      },
    };

    return condtion;
  }, [
    onSetWineTypeFilter,
    onSetWineryTypeFilter,
    onSetCountryTypeFilter,
    onSetGrapeTypeFilter,
    onSetFoodPairingTypeFilter,
  ]);

  const changeHandler = event => {
    const { checked, value } = event.target;

    if (checked) {
      setCheckedInputs([...checkedInputs, value]);
    } else {
      setCheckedInputs(checkedInputs.filter(el => el !== value));
    }
  };

  useEffect(() => {
    filterCondtion[infoType](checkedInputs);
  }, [checkedInputs, infoType, filterCondtion]);

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
            onChange={event => {
              changeHandler(event);
            }}
          />
        ))}
      </GroupForm>
    </React.Fragment>
  );
};

export default ProductListCheckBox;

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
