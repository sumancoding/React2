import React from "react";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./components/page/HomePages";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
