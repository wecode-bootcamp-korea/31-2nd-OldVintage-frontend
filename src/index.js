import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import Theme from './style/Theme';
import { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/styled-engine';
import './../src/style/fonts/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </StyledEngineProvider>
);
