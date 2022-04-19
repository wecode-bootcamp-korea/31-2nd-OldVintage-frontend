const BASE_URL = 'http://10.58.2.57:8000';

export const API = {
  //  백엔드와 소통 후 API 세팅
  login: `${BASE_URL}/users/login`,
  KakaoLogin: `${BASE_URL}/users/kakao-auth`,
  productList: `${BASE_URL}/products`,
  product: `${BASE_URL}/products/`,
  searchedList: `${BASE_URL}/products/search`,
  reviews: `${BASE_URL}/reviews`,
};

export default API;
