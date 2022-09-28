import React from 'react';
import './App.css';

import {Route , Routes} from 'react-router-dom';

import User from './UserComponent/user'
import Admin from './AdminComponent/admin'
import Login from './LoginComponent/login'
import Signup from './LoginComponent/signup';


function App() {
  return (
      <div>
        <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/admin" element = {<Admin/>} />
        <Route path="/user" element = {<User/>} />
        <Route path="/signup" element = {<Signup/>} />
        </Routes>
      </div>
  );
}

export default App;
