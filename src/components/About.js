import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function About() {
  useEffect(() => {
   

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className="blast" style={{ color: "#23ffde" }}>
              A
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              b
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              u
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p align="LEFT">
            A skilled and knowledgeable Electronics final-year Undergrad with keen
            knowledge of <strong>Programming</strong> and&nbsp;
            <strong>Software development</strong> . <i className="fas fa-code fa-1x"></i>
            <br />
            <br />
            Well-organised enthusiastic person, problem solver, quick learner,
            debugger.
           
            <br />
            <br />
            Interested in the development spectrum and actively looking for an
            opportunity in the field of Software Engineering.
            <br />
            <br />
           
            <a href="/contact" style={{ color: "#23ffde" }}>
              Follow&nbsp;
            </a>
            me for more. 🎶
          </p>
        </div>
          <br />
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/ritiksethi21/ritiksethi21/main/code2.svg`}
        />
      </div>
    </>
  );
}
