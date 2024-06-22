import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure this file exists or remove this line if not used
// import './index.css'; 

// If you have the logo.svg file and want to use it, make sure it's in the correct path
//  import logo from './logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you are not using reportWebVitals, you can remove this line
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
