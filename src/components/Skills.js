import React, { useEffect } from "react";
import bounce from "../script/bounce";
import ReactDOM from "react-dom";
// import Script3 from "../script/script";
import Globe from "../script/globe";
function Skills() {
  useEffect(() => {
    bounce();
    // scr();
    console.log("ritikn klfnwfn");
  });
  return (
    <>
      <div className="container home-page">

        <div className="text-zone">
          <h1
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            The main area of my expertise is Web development and Competitive Programming.
            <br />
            <br />
            Tech I know:
            &nbsp;&nbsp; <b>MERN STACK &nbsp;|&nbsp;  C/C++ </b><br />
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs, HTML, CSS, Bootstrap <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; NodeJs , Express , MongoDB<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; OpenCV , Image Processing<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Database Management (SQL)<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; C and C++<br />
            <br />
            <a href="/contact" style={{ color: "#23ffde" }}>
              Follow&nbsp;
            </a>
            me for more. 🎶
          </p>
        </div>


        <div>
        <div id="mysvg">
        {/* <img
          alt="hacker"
          src={`https://raw.githubusercontent.com/ritiksethi21/ritiksethi21/main/code2.svg`}
        /> */}
        {/* <Script3 /> */}
        <Globe />
      </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
