import React from "react";
import ProjectData from "./ProjectData";

const Projects = () => {
  return (
    <>
      <section className="Services topMargin">
        <div className="container">
          <div className="heading">
            <h1>Glimpse on some of my Projects</h1>
          </div>

          <div className="contain grid topMargin">
            {ProjectData.map((val, i) => {
              return (
                <div key={i}>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
