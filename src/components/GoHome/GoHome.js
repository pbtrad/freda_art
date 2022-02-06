import { IconContext } from "react-icons";
import "./GoHome.css";
import { FaArrowCircleUp } from "react-icons/fa";

const GoHome = () => {
  return (
    <IconContext.Provider value={{ className: "home-icon" }}>
      <a href="#home" className="go-home-btn">
        <FaArrowCircleUp/>
      </a>
    </IconContext.Provider>
  );
};

export default GoHome;
