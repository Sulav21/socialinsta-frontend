import React from "react";
import "./Auth.css";
import logo from "../../img/logo.png";

export const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="WebName">
          <h1>Connect Me!</h1>
          <h6>Getting people closer</h6>
        </div>
      </div>
      <Signup />
    </div>
  );
};

function Signup() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="UserName"
            className="infoInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPassword"
          />
        </div>
        <div>
          <span style={{fontSize:'13px'}}>Already have an account? Login Now</span>
        </div>
        <button className="btn login-btn" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}
