import React, { useState } from "react";
import './login.css'

import {useNavigate} from 'react-router-dom';
import LoginImage from '../Images/login.jpg'

const Signup  = () => {


    const navigate = useNavigate();

    function handle(event){
        event.preventDefault();
        console.log(event.target.value);
        userSignup();
    }

    function userSignup(){
        navigate("/user")
    }

        return(
            <section>
                <div id="img-box">
                    <img src="https://static.turbosquid.com/Preview/2014/07/07__15_05_07/Screen+shot+2011-10-23+at+1.05.20+AM.pngafdd4215-a3ba-4371-aa40-ac5a42e845f6Original.jpg" alt=""></img>
                </div>
                <div id="login-box">
                    <form action="" id="login-form" onSubmit={handle}>
                        <p>SignUp</p>
                        <label>Email</label>
                        <input type="text" id="username" name="email"></input>
                        <label>Username</label>
                        <input type="text" id="username" name="username"></input>
                        <label>Mobile Number</label>
                        <input type="text" id="username" name="mobile"></input>
                        <label>Password</label>
                        <input type="password" id="password" name="password"></input>

                        <label>Confirm Password</label>
                        <input type="password" id="password" name="confirmpassword"></input>


                        <div>
                    <button id="user-login-btn" name="user" onClick={handle} type="submit">Submit</button>
                    </div>
                    </form> 
            </div>
        </section>
    )
}

export default Signup