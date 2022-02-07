import React from "react";
import "./About.css";
import snow1 from "./../../assets/snow1.jpeg";

const About = () => {
  return (
    <div className="section-container">
      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Artist</h3>
          <p className="about-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="about-main-right">
          <img src={snow1} alt="snow" className="about-anime" />
        </div>
      </div>
    </div>
  );
};

export default About;
