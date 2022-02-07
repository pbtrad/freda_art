import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import snow1 from "./../../assets/snow1.jpeg";

const Landing = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1 className="text-dark">Freda Hatch</h1>
        <p className="text-dark">Artist</p>
      </div>
      <div className="img-container pt-5">
        <img src={snow1} alt="snowscene" className="img-fluid"></img>
      </div>
      <div className="head-btns">
        <a href="#about" className="btn">
          <p className="btn-text text-white">About me</p>
        </a>
        <a href="#contact" className="btn">
          <p className="btn-text text-white">Contact me</p>
        </a>
      </div>
      <div className="splash-image"></div>
    </div>
  );
};

export default Landing;
