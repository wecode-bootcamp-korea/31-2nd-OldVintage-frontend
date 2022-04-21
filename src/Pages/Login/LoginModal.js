import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { KAKAO_AUTH_URL } from './OAuth';

const LoginModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalBox>
        <LoginContainer>
          <LoginImage>
            <img alt="login" src="/images/login/login-pic-grape.jpg" />
          </LoginImage>
          <LoginBox>
            <Login>
              <h1>Join Old Vintage</h1>
              <div />
              <h1> Log In </h1>
            </Login>
            <SocialLogin>
              <SocialImg>
                <a href={KAKAO_AUTH_URL}>
                  <img
                    src="/images/login/kakao_login_large_narrow.jpg"
                    alt="kakaologin"
                  />
                </a>
              </SocialImg>
              <SocialImg>
                <img src="/images/login/apple-login.png" alt="applelogin" />
              </SocialImg>
            </SocialLogin>
            <Join>
              <div>
                <span>Don't have a profile?</span>
                <span>Join Old Vintage</span>
              </div>
            </Join>
          </LoginBox>
        </LoginContainer>
      </ModalBox>
    </Modal>
  );
};
const ModalBox = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow: hidden;
  border-radius: 8px;
  width: 1008px;
  min-width: 1008px;
  max-width: 1008px;
  height: 100%;
  max-height: 746px;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: sans-serif;
`;

const LoginImage = styled.div`
  width: 45%;
  img {
    object-fit: cover;
  }
`;

const LoginBox = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 628px;
  padding: 100px 80px 100px 80px;
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  h1:first-child {
    color: #ba1628;
    font-size: 30px;
    font-weight: 800;
  }
  h1:last-child {
    font-size: 30px;
    font-weight: 800;
  }
  div {
    background-color: black;
    width: 2px;
    height: 40px;
    margin: 0 15px;
  }
`;
const SocialLogin = styled.div``;

const Join = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    span:last-child {
      margin-top: 5px;
      color: #ba1628;
      margin-top: 20px;
    }
  }
`;

const SocialImg = styled.div`
  width: 340px;
  height: 70px;
  margin-bottom: 30px;
  img {
    border-radius: 30px;
    width: 100%;
    height: 100%;
  }
`;

export default LoginModal;
