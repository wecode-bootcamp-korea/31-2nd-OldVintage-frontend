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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Highest User Rating">Highest User Rating</MenuItem>
          <MenuItem value="Price:Low to High">Price:Low to High</MenuItem>
          <MenuItem value="Price:High to Low">Price:High to Low</MenuItem>
          <MenuItem value="Popular">Popular</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProductSortSelector;
