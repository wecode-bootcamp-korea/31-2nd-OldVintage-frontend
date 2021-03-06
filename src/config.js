// const BASE_URL = 'http://52.78.185.207:8000';
const BASE_URL = 'http://10.58.6.237:8000';

export const API = {
  //  백엔드와 소통 후 API 세팅
  login: `${BASE_URL}/users/login`,
  KakaoLogin: `${BASE_URL}/users/kakao`,
  productList: `${BASE_URL}/products`,
  product: `${BASE_URL}/products/`,
  searchedList: `${BASE_URL}/products/search`,
  reviews: `${BASE_URL}/reviews`,
};

export default API;
