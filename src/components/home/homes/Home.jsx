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
    <div className="i-bg"> </div>
            <div className="img">
              <img src={Image} alt="image1" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              FULL STACK DEVELOPMENT <br />
              STUDENT
            </h1>

            <div className="socialIcon">
              <i className="linkedin">
                <a href="https://www.linkedin.com/in/sumanmalla4994/">
                  <LinkedInIcon />{" "}
                </a>
              </i>
              <i className="github">
                <a href="https://github.com/sumancoding">
                  {" "}
                  <GitHubIcon />
                </a>
              </i>
              <i className="twitter">
                <a href="https://twitter.com/SumanMa03485802">
                  {" "}
                  <TwitterIcon />
                </a>
              </i>
              <i className="facebook">
                <a href="https://www.facebook.com/tsuman49">
                  {" "}
                  <FacebookIcon />
                </a>
              </i>
            </div>

            <p>
              👋 Hi there, I'm Suman Malla (@sumancoding) and I'm learning
              Fullstack development. I mostly enjoy working at frontend side. I
              also enjoy wireframes, prototyping along with UI/UX design. Now
              adays i'm also focusing on the backend side. I'm looking for any
              kind of opportunities.I want to get started working by learning
              and sharing knowledge and experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
