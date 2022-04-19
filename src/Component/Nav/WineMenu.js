import React from 'react';
import styled from 'styled-components';
import { GiWineGlass } from 'react-icons/gi';

const WineMenu = () => {
  return (
    <MenuContainer>
      <IconContainer>
        <GiWineGlass />
      </IconContainer>
      <StyledSpan>Wines</StyledSpan>
      <PopDownMenu>
        <PopupSort>
          <Sort>
            <h1>Red</h1>
            <ul>
              <li>South Italy Red</li>
              <li>Tuscan Red</li>
              <li>Spanish Rioja Red</li>
              <li>South African Pinotage</li>
              <li>Italian Amarone</li>
            </ul>
          </Sort>
          <Sort>
            <h1>White</h1>
            <ul>
              <li>German Riesling</li>
              <li>Northern Italy White</li>
              <li>German Sauvignon Blanc</li>
              <li>German Grauburgunder</li>
              <li>Korea Sunchang Gochujang</li>
            </ul>
          </Sort>
          <Sort>
            <h1>Sparkling</h1>
            <ul>
              <li>test1</li>
              <li>test2</li>
            </ul>
          </Sort>
        </PopupSort>
        <PopupImage>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/wine1.jpg" />
            </Image>
            <ImageText>
              <span>Browse top-rated sauvignon blanc</span>
            </ImageText>
          </ImageContainer>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/wine2.jpg" />
            </Image>
            <ImageText>
              <span>Rare & Extraordinary wines for someone quite special</span>
            </ImageText>
          </ImageContainer>
        </PopupImage>
        <div>
          <span>Brows All Wines</span>
        </div>
      </PopDownMenu>
    </MenuContainer>
  );
};

export default WineMenu;

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
  z-index: 999;
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
