import React from 'react';
import ReactDOM from 'react-dom';
// do i want this or comes from mine?
// import './index.css';
import App from './App';
// dont think i need this or test
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
// dont know if its needed
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// dont think i need this or test

  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();
