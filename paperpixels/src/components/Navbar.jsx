import React from "react";
import logo from "../assets/logo.png"; 
import './navbar.css';
import "tailwindcss";
function Navbar() {
  

  return (
  <div className="navbar flex justify-start">
  <img src={logo} alt="paperpixels!" className="logo w-48"></img>
  
  <ul className="links">
    <li> Home</li>
    <li> Home</li>
    <li> Features</li>
    <li> Contact Us</li>
  </ul>
  <div className="btncont">
 <button className="loginbtn" > Login</button>
  <button className="demobtn" > Demo</button>
  </div>
 
  </div>
  )
}

export default Navbar
