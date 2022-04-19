import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const KakaoLogin = () => {
  const navigate = useNavigate();

  //로그인 성공시 메인으로 보내기
  const goToMainPage = () => {
    navigate('/');
  };

  const getKakaoToken = () => {
    const authCode = new URL(window.location.href).searchParams.get('code');
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&code=${authCode}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`,
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          sendTokenToBack(res.access_token);
        } else {
          alert('로그인 에러 다시 시도해주세요!');
        }
      });
  };

  const sendTokenToBack = kakao_token => {
    fetch(`${API.KakaoLogin}`, {
      method: 'GET',
      headers: {
        Authorization: kakao_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('kakao_token', res.access_token);
        alert('로그인에 성공하였습니다');
        goToMainPage();
      });
  };

  useEffect(() => {
    getKakaoToken();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <h1>카카오 소셜로그인 중 입니다...</h1>
      <CircularProgress />
    </Box>
  );
};

export default KakaoLogin;
