import React, { useState } from "react";
import './login.css'

import {useNavigate} from 'react-router-dom';

import LoginImage from '../Images/login.jpg'

const Login  = () => {

    const [Toggle,setToggle] = new useState(0);

    const navigate = useNavigate();

    function handleuser(event){
        event.preventDefault();
        console.log(event.target.value);
        userLogin();
    }
    function handleadmin(event){
        event.preventDefault();
        console.log(event.target.value);
        adminLogin();
    }
    function handlesignup(event){
        event.preventDefault();
        console.log(event.target.value);
        userSignup();
    }
        function userLogin(){
            navigate("/user")
            
        }
    
        function adminLogin(){
            navigate("/admin")
        }
    
        function userSignup(){
            navigate("/signup")
            
        }



    return(
        <section>
            <div id="img-box">
                <img src="https://static.turbosquid.com/Preview/2014/07/07__15_05_07/Screen+shot+2011-10-23+at+1.05.20+AM.pngafdd4215-a3ba-4371-aa40-ac5a42e845f6Original.jpg" alt=""></img>
            </div>
            <div id="login-box">
                <form action="" id="login-form">
                    <p>Login</p>
                    <label>Username</label>
                    <input type="text" id="username" name="username"></input>

                    <label>Password</label>
                    <input type="password" id="password" name="password"></input>

                    
                    

                    <div>
                    <button id="user-login-btn" name="user" onClick={handleuser} type="submit">User</button>
                    <button id="admin-login-btn" name="admin" onClick={handleadmin} type="submit">Admin</button>
                    <div className="signup-style">
                        <label>Don't have an account?</label>
                        <button id="admin-login-btn" name="signup" onClick={handlesignup} type="submit">Signup</button>
                    </div>
                    </div>
                </form> 
            </div>
        </section>
    )
}

export default Login