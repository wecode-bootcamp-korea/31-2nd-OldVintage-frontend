import React from 'react';
import styled from 'styled-components';
import { GiGrapes } from 'react-icons/gi';

const GrapesMenu = () => {
  return (
    <MenuContainer>
      <IconContainer>
        <GiGrapes />
      </IconContainer>
      <StyledSpan>Grapes</StyledSpan>
      <PopDownMenu>
        <PopupSort>
          <Sort>
            <ul>
              <li>Cabernet Sauvignon</li>
              <li>Montepulciano</li>
              <li>Chadonnay</li>
              <li>NumooHindelda</li>
              <li>Malbec</li>
            </ul>
          </Sort>
          <Sort>
            <ul>
              <li>Sauvignon Blanc</li>
              <li>Shiraz/Syrah</li>
              <li>Zinfandel</li>
              <li>Nebbiolo</li>
              <li>HankookPodo</li>
            </ul>
          </Sort>
          <Sort>
            <ul>
              <li>Pinot Grigio</li>
              <li>Riesling</li>
            </ul>
          </Sort>
        </PopupSort>
        <PopupImage>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/grape1.jpg" />
            </Image>
            <ImageText>
              <span>Great Pinot Noir offers</span>
            </ImageText>
          </ImageContainer>
          <ImageContainer>
            <Image>
              <img alt="wine" src="/images/nav/grape2.jpg" />
            </Image>
            <ImageText>
              <span>Wine that will start ant party!</span>
            </ImageText>
          </ImageContainer>
        </PopupImage>
      </PopDownMenu>
    </MenuContainer>
  );
};

export default GrapesMenu;

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
