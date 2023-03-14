import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetCss from './styled/ResetCss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>
);
