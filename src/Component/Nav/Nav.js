import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Divider from '@mui/material/Divider';
import ShippingMenu from './ShippingMenu';
import LanguageMenu from './LanguageMenu';
import { FiAward } from 'react-icons/fi';
import { ImFontSize } from 'react-icons/im';
import { IoPersonOutline } from 'react-icons/io5';
import WineMenu from './WineMenu';
import ParingsMenu from './ParingsMenu';
import GrapesMenu from './GrapesMenu';
import RegionsMenu from './RegionsMenu';
import NavSearchBar from '../../Pages/NavSearchBar/NavSearchBar';

const Nav = () => {
  // TODO : Nav Login Merge시 state 추가하기
  return (
    <NavigationContainer>
      <NavigationWrapper>
        <UpperNavigation>
          <NavLeft>
            <WevinoLogo>Wevino</WevinoLogo>
            <NavSearchBar />
          </NavLeft>
          <NavRight>
            <ShippingMenu />
            <LanguageMenu />
            <IconContainer>
              <ImFontSize />
            </IconContainer>
            <StyledDivider orientation="vertical" variant="middle" flexItem />
            <IconContainer>
              <IoPersonOutline style={{ cursor: 'pointer' }} />
              {/* TODO: Nav Login Metge시 IoPersonOutline onClick 시 로그인 모달 열리도록 기능 추가 */}
            </IconContainer>
          </NavRight>
        </UpperNavigation>
        <WineNavigation>
          <WineNavMenu>
            <WineMenu />
            <ParingsMenu />
            <GrapesMenu />
            <RegionsMenu />
            <WineNavItem>
              <IconContainer>
                <FiAward />
              </IconContainer>
              <StyledSpan>Awards</StyledSpan>
            </WineNavItem>
          </WineNavMenu>
        </WineNavigation>
      </NavigationWrapper>
    </NavigationContainer>
  );
};

export default Nav;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.grey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

const NavigationWrapper = styled.div`
  ${({ theme }) => theme.flexSet('column', '', '')};
  width: 80%;
  height: 130px;
  background-color: white;
  padding: 5px 0;
`;

const UpperNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const WevinoLogo = styled.h1`
  margin-right: 30px;
  font-family: 'DancingScript';
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.vintageRed};
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavRight = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  margin: 0 10px;
`;
const WineNavigation = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const WineNavMenu = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const WineNavItem = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;
const StyledSpan = styled.span`
  font-size: 18px;
`;
