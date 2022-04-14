import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavSearchListItem from './NavSearchListItem';
import API from '../../config';
import { Box } from '@mui/system';

const NavSearchListModal = ({ filteredInput }) => {
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
      {gottenSearchedWineList.map(wineItem => (
        <NavSearchListItem
          key={wineItem.id}
          wineId={wineItem.id}
          wineName={wineItem.name}
          winePrice={wineItem.price}
        />
      ))}
    </NavSearchListArea>
  );
};
export default NavSearchListModal;

const NavSearchListArea = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 2vh 0 0 0;
  padding: 1vh 0 2vh 1vw;
  min-height: 10vh;
  max-height: 50vh;
  background-color: white;
  overflow-y: auto; ;
`;
