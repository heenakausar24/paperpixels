import React from "react";
import './login.css'
import logo from "../assets/logo.png";  
import loginlottie from "../assets/loginlottie.json";
import Lottie from "lottie-react";
import 'animate.css';


export default function Login() {
 

  return (

    <>
   <div className="login-card1">
  
  <div className="left-section">
     <img src={logo} alt="logincard" className="logo" />
     <div className="loginlottie">
    <Lottie animationData={loginlottie} loop={true} autoplay={true} />
  </div>
  </div>
  <div className="login-card2">
  <h2 className="welcome-text"> Welcome back!</h2>
  <br></br> <br></br><br></br>
  <h3 className="emailpass-text">Email address</h3>
  <input type="email" className="emailin" placeholder="xyz@gmail.com"></input>
  <br></br>
  <h3 className="emailpass-text"> Password</h3>
  <input type="password" className="emailin" placeholder="***********"></input>
  <h2 className="forgot"> forgot password?</h2>
  <button className="login">Log in</button>
  <h2 className="register"> Dont have an account? <h2 className="register2"> Register</h2></h2>
  </div>
</div>
  
    </>
    


  )
}



