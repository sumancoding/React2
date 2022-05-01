import React from "react";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/page/HomePages";
import "./App.css";
import Skill from "./components/home/services/Skill";
import Projects from "./components/Projects/Projects";
import Contact from "./components/home/contact/Contact";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/pages" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
