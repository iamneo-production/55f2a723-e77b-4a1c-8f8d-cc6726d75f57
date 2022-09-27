
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Adminlogin from "./Pages/Adminlogin";
import Home from "./Pages/Home";

function App() {
  /*const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }*/
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="adminlogin" element={<Adminlogin />} />
          <Route path="home" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;