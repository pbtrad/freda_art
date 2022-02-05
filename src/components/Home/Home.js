import React from "react";
import "./Home.css";
import Landing from "./Landing";
import About from "../About/About";
import GalleryBox from "../Artwork/Artwork";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <GalleryBox />
      <Contact />
    </div>
  );
}
