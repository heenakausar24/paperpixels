import React from "react";
import logo from "../assets/logo.png"; 
import './navbar.css';
import "tailwindcss";
function Navbar() {
  

  return (
  <div className="navbar">
  <img src={logo} alt="paperpixels!" className="logo"></img>
<div className="linkscont">
  <ul className="links">
    <li> Home</li>
    <li> home</li>
    <li> Features</li>
    <li> Contact Us</li>
  </ul>
  </div>
  <div className="btncont">
 <button className="loginbtn" > Login</button>
  <button className="demobtn" > Demo</button>
  </div>
 
  </div>
  )
}

export default Navbar
