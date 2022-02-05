import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import GalleryBox from "./components/Artwork/Artwork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Home/Landing";
import * as Scroll from 'react-scroll';
import Main from "./components/Main";
import {Routes as Switch, Route} from 'react-router-dom';

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

const durationFn = function(deltaTop) {
  return deltaTop;
};

let scroll    = Scroll.animateScroll;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
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
      offset: offset
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
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        offset: 50
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
        <nav className="navbar navbar-default navbar-dark h-100 navbar-fixed-top">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    Test 1
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}
                  >
                    Test 2
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 3
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 4
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test5"
                    to="test5"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={1000}
                  >
                    Test 5 ( delay )
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test6"
                    to="anchor"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 6 (anchor)
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test7"
                    to="test7"
                    spy={true}
                    smooth={true}
                    duration={durationFn}
                  >
                    Test 7 (duration and container)
                  </Link>
                </li>
                <li>
                  {" "}
                  <a onClick={() => animateScroll.scrollTo(100)}>
                    Scroll To 100!
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => animateScroll.scrollToBottom()}>
                    Scroll To Bottom
                  </a>
                </li>
                <li>
                  {" "}
                  <a onClick={() => animateScroll.scrollMore(500)}>
                    Scroll 500 More!
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    onClick={() =>
                      animateScroll.scrollMore(1000, { delay: 1500 })
                    }
                  >
                    Scroll 1000 More! ( delay ){" "}
                  </a>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test8"
                    to="same"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Same target
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test9"
                    to="same"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Same target
                  </Link>
                </li>
                <li>
                  <a
                    className="test1"
                    to="test1"
                    onClick={() => this.scrollTo()}
                  >
                    Scroll to element
                  </a>
                </li>
                <li>
                  <a
                    className="test1"
                    to="test1"
                    onClick={() => this.scrollTo(-50)}
                  >
                    Scroll to element (offset -50)
                  </a>
                </li>
                <li>
                  <a
                    className="test1"
                    to="test1"
                    onClick={() => this.scrollToWithContainer()}
                  >
                    Scroll to element within container
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <Landing name="/home" id="home" className="element">
            test 1
          </Landing>
          <div id="about">
        <About name="/about" className="element no-padding">
          test 2
        </About>
        </div>
   
        <GalleryBox name="/artwork" id="artwork" className="element">
          test 3
        </GalleryBox>
<div id="contact">
        <Contact name="/contact" className="element">
          test 4
        </Contact>
        </div>
        <Footer name="test4" className="element">
          test 4
        </Footer>

</div>
       

      

        

        

        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "200px",
            overflow: "scroll",
            marginBottom: "100px"
          }}
        >
          

          
        </Element>

        

       

        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    );
  }
}

export default Section;