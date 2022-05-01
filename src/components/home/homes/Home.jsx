import React from "react";
import Image from "../../images/removed.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={Image} alt="image1" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              I AM A <br />
              WEB DESIGNER
            </h1>
            <div className="socialIcon">
              <i className="linkedin">
                <LinkedInIcon />
              </i>
              <i className="github">
                <GitHubIcon />
              </i>
              <i className="twitter">
                <TwitterIcon />
              </i>
              <i className="facebook">
                <FacebookIcon />
              </i>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              voluptatum ducimus excepturi voluptas, numquam officiis delectus
              corrupti nostrum voluptate possimus ex eos illo eaque
              necessitatibus saepe! Officiis veniam deleniti ullam?
            </p>
            <button className="primary-btn">DownLoad Resume</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
