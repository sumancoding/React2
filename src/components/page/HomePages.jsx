import React from "react";
//import About from "../home/about/About";
import Home from "../home/homes/Home";
import Skill from "../home/services/Skill";
import Projects from "../Projects/Projects";

const HomePages = () => {
  return (
    <>
      <Home />
      {/* <About /> */}
      <Skill />
      <Projects />
    </>
  );
};

export default HomePages;
