import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1>Freda Hatch</h1>
        <p>Artist</p>
      </div>
      <div className="head-btns">
        <Link to="/about" className="btn btn-white">
          <p className="btn-text">Know more about me</p>
        </Link>
        <Link to="/contact" className="btn btn-transparent">
          <p className="btn-text">Connect with me</p>
        </Link>
      </div>
      <div className="splash-image"></div>
    </div>
  );
};

export default Home;
