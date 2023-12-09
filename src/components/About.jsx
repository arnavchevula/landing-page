import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Resume from "./Resume";
import "./About.css";

const About = () => {
  return (
    <div className="AboutPage__Wrapper">
      <Nav
        // color="linear-gradient(77deg, rgba(9,80,144,1) 0%, rgba(52,76,96,1) 70%)"
        color="#344c6e"
        fontColor={"black"}
      />
      <Resume />
      <Footer color="#344c6e" />
    </div>
  );
};

export default About;
