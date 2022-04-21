import React from 'react';
import styled from 'styled-components';
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
import LoginModal from '../../Pages/Login/LoginModal';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <NavigationContainer>
      <NavigationWrapper>
        <UpperNavigation>
          <NavLeft>
            <WevinoLogo onClick={goToMain}>Wevino</WevinoLogo>
          </NavLeft>
          <NavSearchBar />
          <NavRight>
            <ShippingMenu />
            <LanguageMenu />
            <IconContainer>
              <ImFontSize />
            </IconContainer>
            <StyledDivider orientation="vertical" variant="middle" flexItem />
            <IconContainer>
              <IoPersonOutline
                style={{ cursor: 'pointer' }}
                onClick={handleOpen}
              />
              <LoginModal handleClose={handleClose} open={open} />
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

  &:hover {
    cursor: pointer;
  }
`;

const NavLeft = styled.div`
  display: flex;
  /* align-items: flex-end; */
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
