import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavSearchListItem from './NavSearchListItem';
import API from '../../config';
import { Box } from '@mui/system';

const NavSearchListModal = ({ filteredInput, onSetFilteredInput }) => {
  const [gottenSearchedWineList, setGottenSearchedWineList] = useState([]);

  useEffect(() => {
    const getSearchedListFromServer = async () => {
      const res = await fetch(
        `${API.searchedList}?offset=0&limit=6&name=${filteredInput}`,
        {
          method: 'GET',
        }
      );
      const data = await res.json();
      setGottenSearchedWineList(data.result);
    };
    getSearchedListFromServer();
  }, [filteredInput]);

  return (
    <NavSearchListArea>
      {gottenSearchedWineList.length > 0 ? (
        ''
      ) : (
        <NoSearchString>{`Your search '${filteredInput}' did not match any our products.`}</NoSearchString>
      )}
      {gottenSearchedWineList.map(wineItem => (
        <NavSearchListItem
          key={wineItem.id}
          wineId={wineItem.id}
          wineName={wineItem.name}
          winePrice={wineItem.price}
          onSetFilteredInput={onSetFilteredInput}
        />
      ))}
    </NavSearchListArea>
  );
};
export default NavSearchListModal;

const NavSearchListArea = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  margin: 2vh 0 0 2vw;
  padding: 0 0 1vh 0;
  min-height: 10vh;
  max-height: 50vh;
  width: 90%;
  background-color: white;
  overflow-y: auto;
  z-index: 10000;
`;

const NoSearchString = styled.div`
  margin: 3.5vh 0 0 0.3vw;
`;
