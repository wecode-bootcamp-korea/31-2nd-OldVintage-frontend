import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

const SortButton = styled(FormControl)``;

const ProductSortSelector = () => {
  const [productSortFilter, setProductSortFilter] = useState('');

  const changeProductSortHandler = event => {
    setProductSortFilter(event.target.value);
  };

  return (
    <div>
      <SortButton sx={{ minWidth: 100 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <Select
          value={productSortFilter}
          label="Age"
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
      </SortButton>
    </div>
  );
};

export default ProductSortSelector;
