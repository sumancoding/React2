import React from "react";
import Contact from "../home/contact/Contact";
import Home from "../home/homes/Home";
import Skill from "../home/services/Skill";
import Projects from "../Projects/Projects";

const HomePages = () => {
  return (
    <>
      <Home />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePages;
