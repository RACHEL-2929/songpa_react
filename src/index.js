import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import './index.css';
// react:yarn start(빠르다), npem start(느리다)

//import: 해당하는 파일에 대한 펑션이나 모듈을 입력받는다.

// import App from './Ex1';

// import App from './Homerouter';

// import reportWebVitals from './reportWebVitals';

import App from './Songparouter';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    {/* function export page 처리 */}

    <App />

  </React.StrictMode>



  // <BrowserRouter>

  //   <App />



  // </BrowserRouter>



);



// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();