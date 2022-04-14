import React, { useState } from 'react';
import NavSearchInsertModal from '../../Component/NavSearchBar/NavSearchInsertModal';
import NavSearchListModal from '../../Component/NavSearchBar/NavSearchListModal';
import styled from 'styled-components';

const NavSearchBar = () => {
  const [filteredInput, setFilteredInput] = useState('');

  const filteredInputHandler = input => {
    setFilteredInput(input);
  };

  return (
    <NavSearchBarArea>
      <NavSearchInsertModal onSetFilteredInput={filteredInputHandler} />
      {filteredInput.length > 0 ? (
        <NavSearchListModal filteredInput={filteredInput} />
      ) : (
        ''
      )}
    </NavSearchBarArea>
  );
};

export default NavSearchBar;

const NavSearchBarArea = styled.div`
  padding: 5vh 0 0 0;
  width: 20vw;
  background-color: inherit;
`;
