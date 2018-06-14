import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center" style={{ backgroundImage: "./assets/images/space.jpg" }} >
    {props.children}
    < h1 > Space Cat Clicky Game</h1 >
    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
  </div >
);

export default Hero;
