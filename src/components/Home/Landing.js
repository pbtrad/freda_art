import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Landing = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1 className="text-dark">Freda Hatch</h1>
        <p className="text-dark">Artist</p>
      </div>
      <div className="head-btns">
        <a href="#about" className="btn btn-dark">
          <p className="btn-text">About me</p>
        </a>
        <a href="#contact" className="btn btn-dark">
          <p className="btn-text">Contact me</p>
        </a>
      </div>
      <div className="splash-image"></div>
    </div>
  );
};

export default Landing;