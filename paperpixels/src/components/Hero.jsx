import React from "react";
import lottie from "../assets/lotti.json";
import Lottie from "lottie-react";
import './hero.css';
import "tailwindcss";
import 'animate.css';
export default function Hero() {
  

  return (

      <div className="hero">
  <div className="hero-text">
    <h1 className="heading1 leading-snug animate__animated animate__bounce">
      Still typing your notes?
    </h1>
    <h1 className="heading2">Paperpixels already finished!</h1>
    <button className="getstartedbtn">Explore now</button>
  </div>

  <div className="lottie">
    <Lottie animationData={lottie} loop={true} autoplay={true} />
  </div>
</div>


  )
}

