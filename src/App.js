import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import GalleryBox from "./components/Artwork/Artwork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Home/Landing";
import * as Scroll from "react-scroll";
import Main from "./components/Main";
import { Routes as Switch, Route } from "react-router-dom";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const durationFn = function (deltaTop) {
  return deltaTop;
};

let scroll = Scroll.animateScroll;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo(offset) {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        offset: 50,
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <Landing name="/home" id="home" className="element">
            test 1
          </Landing>
          <div id="about">
            <About name="/about" className="element no-padding">
              test 2
            </About>
          </div>
<div id="artwork">
          <GalleryBox name="/artwork" id="artwork" className="element">
            test 3
          </GalleryBox>
          </div>
          <div id="contact">
            <Contact name="/contact" className="element">
              test 4
            </Contact>
          </div>
          <Footer name="test4" className="element">
          
          </Footer>
          
        </div>

        
      </div>
    );
  }
}

export default Section;
