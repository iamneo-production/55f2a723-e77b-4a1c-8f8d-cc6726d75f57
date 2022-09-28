import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router}  from "react-router-dom";
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> Mr.Viewer-shivanshpundir123

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
        <App />
    </Router>
=======
    <App />
>>>>>>> Mr.Viewer-shivanshpundir123
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
