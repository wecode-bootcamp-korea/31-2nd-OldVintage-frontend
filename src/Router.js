import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Component/Nav/Nav';
import Footer from './Component/Footer/Footer';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import LoginModal from './Pages/Login/LoginModal';
import KakaoLogin from './Pages/Login/KakaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <LoginModal />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/oauth/kakao" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
