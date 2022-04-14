import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavSearchListItem = ({ wineId, wineName, winePrice }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/products/${wineId}`);
  };

  const winePriceString = winePrice
    .split('.')[0]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <NavSearchListItemArea onClick={goToDetailPage}>
      <WineNameString>{wineName}</WineNameString>
      <WinePriceString>₩{winePriceString}</WinePriceString>
    </NavSearchListItemArea>
  );
};

export default NavSearchListItem;

const NavSearchListItemArea = styled.div`
  display: flex;
  align-items: center;
  margin: 3vh 0 0 0;
  border-bottom: 1px solid rgb(210, 210, 210);
  background-color: white;
`;

const WineNameString = styled.span`
  width: 90%;
  font-size: 22px;
`;

const WinePriceString = styled.span`
  display: flex;
  font-size: 22px;
`;
