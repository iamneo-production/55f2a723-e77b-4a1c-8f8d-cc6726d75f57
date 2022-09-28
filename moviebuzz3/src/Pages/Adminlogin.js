import React from "react";
function Adminlogin(){
  return (
    <div className="main">
    <div className="sub-main">
        <div>
          <h1>Admin login</h1>
          <div>
            <input type="text" placeholder="user name" className="name"/>
          </div>
          <div>
            <input type="password" placeholder="password" className="name"/>
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
        </div>
      </div>

    </div>
    );

}

export default Adminlogin;