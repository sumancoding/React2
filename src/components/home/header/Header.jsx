import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.screenY > 200);
  });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <ul>
              <li>
                {" "}
                <Link to="/"> {"</sumancoding>"}</Link>
              </li>
            </ul>
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
