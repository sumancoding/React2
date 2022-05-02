import React from "react";

const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "About Me",
      para: " Hello everyone. First of all, thank you for taking your time to find me out. My name is Suman Malla.  I did my full stack training program from Turku University. I've also been coding from CodeAcademy. I'm looking for any opportunities to work in IT field  ",
      para1:
        " I'm extremely hardworking, passionate and motivated and I want to grow in this industry.I like to solve problems by sharing and communicating knowledge and information between each others. I am an optimistic person and I want to grow by learning things. I like to take risks in life and I am not scared to fail because that's how you learn and grow.",
    },
  ];
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h1>About Me and My Technical Skills</h1>
          </div>

          <div className="content flex">
            <div className="left topMarign">
              <Progress done="80" title="HTML" />
              <Progress done="70" title="CSS" />
              <Progress done="65" title="JAVASCRIPT" />
              <Progress done="65" title="REACT JS" />
              <Progress done="60" title="NODE EXPRESS" />
              <Progress done="60" title="MONGO DB" />
            </div>
            <div className="right mtop">
              {data.map((val, i) => {
                return (
                  <div key={i}>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
