import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
  return (
    <SearchBox>
      <SearchInnerBox>
        <SearchOutlinedIcon
          sx={{
            color: 'rgba(196,196,196)',
            mr: 1,
            my: 0.5,
            margin: '0 5px 0 10px',
          }}
        />
        <SearchInput />
      </SearchInnerBox>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.form``;

const SearchInnerBox = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 30px;
`;

const SearchInput = styled.input.attrs({ placeholder: 'Search any wine' })`
  width: 80%;
  border: 0px;
  ::placeholder {
    font-size: 15px;
    color: rgba(196, 196, 196);
  }
`;
