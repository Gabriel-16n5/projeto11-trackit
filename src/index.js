import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './style/ResetCss';
import GlobalStyled from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss />
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
