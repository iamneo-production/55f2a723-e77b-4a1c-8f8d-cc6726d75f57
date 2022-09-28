<<<<<<< HEAD
import React from 'react';
import './App.css';

import {Route , Routes} from 'react-router-dom';

import User from './UserComponent/user'
import Admin from './AdminComponent/admin'
import Login from './LoginComponent/login'
import Signup from './LoginComponent/signup';

import ViewMovies from './ViewMovies/viewmovies'
function App() {
  return (
      <div>
        <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/admin" element = {<Admin/>} />
        <Route path="/user" element = {<User/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/viewmovies" element = {<ViewMovies/>} />
        </Routes>
      </div>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> Mr.Viewer-shivanshpundir123
  );
}

export default App;
