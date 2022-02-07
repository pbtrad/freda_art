import React from "react";
import "./Header.css";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-dark" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#artwork">Art</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;
