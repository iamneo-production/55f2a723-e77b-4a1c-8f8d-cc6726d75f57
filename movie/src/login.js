import './App.css';
import React from "react";
function Login() {
  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQlKLCMa1pwH4Vme9KnnABJ8isBexXc7XLEdpPZOY4Q&s"
            alt = "profile" className="profile"/>
          </div>

        </div>
        <div>
          <h1>Login</h1>
          <div>
            <input type="text" placeholder="user name" className="name"/>
          </div>
          <div>
            <input type="password" placeholder="password" className="name"/>
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
          <div>
            <p>
              <a href="#">Login as admin?</a><br/> New user?<a href="#">Sign Up</a>
            </p>
          </div>

        </div>
      </div>

    </div>
    </div>
    );

  }


  export default Login;