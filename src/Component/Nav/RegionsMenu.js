import React from 'react';
import styled from 'styled-components';
import { MdOutlinePlace } from 'react-icons/md';

const RegionsMenu = ({ handleClose, handleHover, anchorEl }) => {
  return (
    <MenuContainer>
      <IconContainer>
        <MdOutlinePlace />
      </IconContainer>
      <StyledSpan>Regions</StyledSpan>
      <PopDownMenu>
        <PopupSort>
          <Sort>
            <h1>Germany</h1>
            <ul>
              <li>Mosel</li>
              <li>Pfalz</li>
              <li>Rheingau</li>
            </ul>
          </Sort>
          <Sort>
            <h1>Italy</h1>
            <ul>
              <li>Lugana</li>
              <li>Piemonte</li>
              <li>Tuscany</li>
              <li>Puglia</li>
            </ul>
          </Sort>
          <Sort>
            <h1>France</h1>
            <ul>
              <li>Vin de Pays</li>
              <li>Southern Rhone</li>
              <li>Bordeaux</li>
            </ul>
          </Sort>
        </PopupSort>
        <PopupImage>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/regions1.jpg" />
            </Image>
            <ImageText>
              <span>Napa Valley's most wanted</span>
            </ImageText>
          </ImageContainer>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/regions2.jpg" />
            </Image>
            <ImageText>
              <span>Top-notch German Rieslings</span>
            </ImageText>
          </ImageContainer>
        </PopupImage>
      </PopDownMenu>
    </MenuContainer>
  );
};

export default RegionsMenu;

const IconContainer = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;

const StyledSpan = styled.span`
  font-size: 18px;
`;

const PopDownMenu = styled.div`
  position: absolute;
  visibility: hidden;
  background-color: white;
  box-shadow: 2px 2px 7px 7px rgba(0, 0, 0, 0.3);
  top: 25px;
  padding: 40px;
`;

const PopupSort = styled.div`
  display: flex;
`;

const Sort = styled.div`
  width: 300px;

  ul {
    li {
      margin-bottom: 20px;
    }
  }
`;

const PopupImage = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-right: 20px;
  border-radius: 7px;
  margin-bottom: 20px;
  overflow: hidden;
`;
const Image = styled.div`
  width: 100px;
  height: 60px;
  img {
    object-fit: cover;
  }
`;

const ImageText = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #f6f3ef;
  padding: 15px;
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;

  &:hover ${PopDownMenu} {
    visibility: inherit;
  }
`;
