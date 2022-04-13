import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProductSortSelector = ({ onSetSortBtnFilter, sortButtonFilter }) => {
  const changeProductSortHandler = event => {
    onSetSortBtnFilter(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <Select
          label="Age"
          value={sortButtonFilter}
          onChange={changeProductSortHandler}
          sx={{ borderRadius: 5 }}
        >
          <MenuItem value="rating">
            <em>None</em>
          </MenuItem>
          <MenuItem value="rating">Highest User Rating</MenuItem>
          <MenuItem value="low_price">Price:Low to High</MenuItem>
          <MenuItem value="high_price">Price:High to Low</MenuItem>
          <MenuItem value="popular">Popular</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProductSortSelector;
