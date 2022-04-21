import React from 'react';
import styled from 'styled-components';
import { GiCheeseWedge } from 'react-icons/gi';

const ParingsMenu = () => {
  return (
    <MenuContainer>
      <IconContainer>
        <GiCheeseWedge />
      </IconContainer>
      <StyledSpan>Parings</StyledSpan>
      <PopDownMenu>
        <PopupSort>
          <Sort>
            <ul>
              <li>Beef</li>
              <li>Lamb</li>
              <li>Veal</li>
              <li>Pork</li>
              <li>Mushrooms</li>
            </ul>
          </Sort>
          <Sort>
            <ul>
              <li>Cured meat</li>
              <li>Goat Cheese</li>
              <li>Mature and hard cheese</li>
              <li>Paste</li>
              <li>Spicy food</li>
            </ul>
          </Sort>
          <Sort>
            <ul>
              <li>Aperitif</li>
              <li>Appetizers and snacks</li>
              <li>Lean fish</li>
            </ul>
          </Sort>
        </PopupSort>
        <PopupImage>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/parings1.jpg" />
            </Image>
            <ImageText>
              <span>Goes incredibly well with this food...</span>
            </ImageText>
          </ImageContainer>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/parings2.jpg" />
            </Image>
            <ImageText>
              <span>Choose the perfect wine for food</span>
            </ImageText>
          </ImageContainer>
        </PopupImage>
      </PopDownMenu>
    </MenuContainer>
  );
};

export default ParingsMenu;
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
