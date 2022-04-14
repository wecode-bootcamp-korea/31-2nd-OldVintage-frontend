import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import useDebounce from '../../Pages/NavSearchBar/hooks/useDebounce';
import { Box } from '@mui/system';
import { Input } from '@mui/material';

const NavSearchInsertModal = ({ onSetFilteredInput }) => {
  const [searchedInput, setSearchedInput] = useState('');
  const searchbarInput = useDebounce(searchedInput, 1000);

  const searchInputHandler = event => {
    setSearchedInput(event.target.value);
  };

  useEffect(() => {
    onSetFilteredInput(searchbarInput);
  }, [searchbarInput, onSetFilteredInput]);

  return (
    <NavSearchInserArea>
      <NavSearchIcon />
      <NavSearchInput onChange={searchInputHandler} />
    </NavSearchInserArea>
  );
};

export default NavSearchInsertModal;

const NavSearchInserArea = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 40px;
  background-color: white;
`;

const NavSearchIcon = styled(SearchIcon)`
  margin: 0 0 0 0.5vw;
  color: grey;
`;

const NavSearchInput = styled(Input)`
  width: 100%;
`;
