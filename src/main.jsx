import React from 'react';
import ReactDOM from 'react-dom/client';
import SukraPeedaMudra from './pages/SukraPeedaMudra/SukraPeedaMudra';

// Import basic global styles to reset body margin for clean preview
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  body {
    margin: 0;
    padding: 0;
    background-color: #FFFDF8;
  }
`;
document.head.appendChild(globalStyle);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SukraPeedaMudra />
  </React.StrictMode>
);
