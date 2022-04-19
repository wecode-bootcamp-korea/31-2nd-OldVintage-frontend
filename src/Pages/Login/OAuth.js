// export const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_KEY;
export const CLIENT_ID = '25a404413a9f17fe50625379527f421a';
// Kakao Developers My App REST API KEY

export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
