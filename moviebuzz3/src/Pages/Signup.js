import React from "react";
import './Signup.css'

function Signup(){
    return(
        <div className="main">
      <div className="sub-main">
      <div>
          <h1>Signup</h1>
          <div>
            <input type="text" placeholder="Enter email" className="name"/>
          </div>
          <div>
            <input type="username" placeholder="Enter username" className="name"/>
          </div>
          <div>
            <input type="mobile" placeholder="Enter MobileNumber" className="name"/>
          </div>
          <div>
            <input type="password" placeholder="Password" className="name"/>
          </div>
          <div>
            <input type="confirmpwd" placeholder="Confirm password" className="name"/>
          </div>
          <div className="signup-button">
            <button>
            <a href="/home">Signup</a>
            </button>
          </div>
          <div>
            <p>
              Already have an account?<a href="/">Login</a>
            </p>
          </div>
        </div>
    </div>
    </div>

    );
}
export default Signup;