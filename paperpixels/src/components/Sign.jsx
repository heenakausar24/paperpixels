import React from "react";
import './sign.css'
import logo from "../assets/logo.png";  
import loginlottie from "../assets/loginlottie.json";
import Lottie from "lottie-react";
import 'animate.css';


export default function Sign() {
 

  return (

    <>
   <div className="login-card1">
  
  <div className="left-section">
    <img src={logo} alt="logincard" className="logo" />

<h2 className="signup-text"> Sign up</h2>
  <br></br> 
  <h3 className="username-text">Username</h3>
  <input type="text" className="emailin" placeholder="xyz"></input>
  <br></br>
  
  <h3 className="emailpass-text">Email address</h3>
  <input type="email" className="emailin" placeholder="xyz@gmail.com"></input>

  <br></br>
  <h3 className="emailpass-text"> Password</h3>
  <input type="password" className="emailin" placeholder="***********"></input>
 
  <button className="login">Sign up</button>
  <h2 className="register"> Already have an account? <h2 className="register2"> Log in</h2></h2>
  
  </div>
  <div className="login-card2">
   
     <div className="loginlottie">
    <Lottie animationData={loginlottie} loop={true} autoplay={true} />
  </div>
  </div>
</div>
  
    </>
    


  )
}



