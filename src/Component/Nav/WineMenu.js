import React from 'react';
import styled from 'styled-components';
import { GiWineGlass } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const MENU_LIST = [
  [
    'South Italy Red',
    'Tuscan Red',
    'Spanish Rioja',
    'South African Pinotage',
    'Italian Amarone',
  ],
  [
    'German Riesling',
    'Northern Italy White',
    'German Sauvignon Blanc',
    'German Grauburgunder',
    'Korea Sunchang Gochujang',
  ],
];

const [FIRST_MENU, SECOND_MENU] = MENU_LIST;

const WineMenu = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('./products');
  };

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
              {FIRST_MENU.map((item, i) => (
                <MenuString onClick={goToProducts} key={i}>
                  {item}
                </MenuString>
              ))}
            </ul>
          </Sort>
          <Sort>
            <h1>White</h1>
            <ul>
              {SECOND_MENU.map((item, i) => (
                <MenuString onClick={goToProducts} key={i}>
                  {item}
                </MenuString>
              ))}
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

const MenuString = styled.li`
  &:hover {
    cursor: pointer;
  }
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
