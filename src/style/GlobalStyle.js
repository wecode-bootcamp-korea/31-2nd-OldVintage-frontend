import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './Theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    outLine:none;
  }

  body{
    background-color: #ffffff;
    font-family: 'Didact Gothic', sans-serif;
  }

  a, p {
  font-size: 8px;
  font-weight: 400;
  margin: 4px 0;
  }

  h1 {
  font-size: 20px;
  font-weight: 700;
  margin: 16px 0px;
  }

  h2 {
  font-size: 15px;
  font-weight: 600;
  margin: 8px 0px;
  }

  h3 {
  font-size: 8px;
  font-weight: 600;
  margin: 8px 0;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
