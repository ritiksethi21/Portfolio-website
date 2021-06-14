import React, { useEffect } from "react";

import Guitar from "./Guitar.js";
import bounce from "../script/bounce";
import guitarAnim from "../script/guitarAnim";

export default function Home() {
  useEffect(() => {
    document.title =
      "Ritik Sethi";

    bounce();
    guitarAnim();

    const s = document.querySelectorAll(".Slast");

    s.forEach(function(letter) {
      letter.style.opacity = 1;
      letter.style.transform = "rotate(360deg)";
    });
    return () => {
      s.forEach(function(letter) {
        letter.style.opacity = 0;
        letter.style.transform = "rotate(0deg)";
      });
    };
  }, []);

  return (
    <div>
      <div className="container home-page">
      <img
            className="logo"
            src="https://i.ibb.co/Sm3WMtP/circle-cropped.png"
            alt="logo"
          />
        <div className="text-zone">
          <h1>
            <span className="blast" >H</span>
            <span className="blast">i</span>
            <span className="Slast">,</span>
            <br />
            <span className="blast">I</span>
            <span className="blast">’</span>
            <span className="blast">m&nbsp;</span>
            <span className="Slast" style={{ fontSize: "120%" }}>R</span>
            <span className="Slast" style={{ fontSize: "120%" }}>i</span>  
            <span className="Slast" style={{ fontSize: "120%" }}>t</span>
            <span className="Slast" style={{ fontSize: "120%" }}>i</span>
            <span className="Slast" style={{ fontSize: "120%" }}>k</span>
            <span className="Slast" style={{ fontSize: "120%" }}>&nbsp;</span>
            <span className="Slast" style={{ fontSize: "120%" }}>S</span>
            <span className="Slast" style={{ fontSize: "120%" }}>e</span>
            <span className="Slast" style={{ fontSize: "120%" }}>t</span>
            <span className="Slast" style={{ fontSize: "120%" }}>h</span>
            <span className="Slast" style={{ fontSize: "120%" }}>i</span>
            <span className="blast">,</span>
            <br />
            {/* <span className="blast" style={{ fontSize: "100%" }}>M</span>
            <span className="blast" style={{ fontSize: "100%" }}>E</span>
            <span className="blast" style={{ fontSize: "100%" }}>R</span>
            <span className="blast" style={{ fontSize: "100%" }}>N&nbsp;</span>
            <span className="blast" style={{ fontSize: "100%" }}>S</span>
            <span className="blast" style={{ fontSize: "100%" }}>t</span>
            <span className="blast" style={{ fontSize: "100%" }}>a</span>
            <span className="blast" style={{ fontSize: "100%" }}>c</span>
            <span className="blast" style={{ fontSize: "100%" }}>k&nbsp;</span> */}
            <span className="blast" style={{ fontSize: "100%" }}>W</span>
            <span className="blast" style={{ fontSize: "100%" }}>e</span>
            <span className="blast" style={{ fontSize: "100%" }}>b&nbsp;</span>
            <span className="blast" style={{ fontSize: "100%" }}>D</span>
            <span className="blast" style={{ fontSize: "100%" }}>e</span>
            <span className="blast" style={{ fontSize: "100%" }}>v</span>
            <span className="blast" style={{ fontSize: "100%" }}>e</span>
            <span className="blast" style={{ fontSize: "100%" }}>l</span>
            <span className="blast" style={{ fontSize: "100%" }}>o</span>
            <span className="blast" style={{ fontSize: "100%" }}>p</span>
            <span className="blast" style={{ fontSize: "100%" }}>e</span>
            <span className="blast" style={{ fontSize: "100%" }}>r</span>
            <span className="blast" style={{ fontSize: "100%" }}>.</span>
          </h1>
          <h2>MERN Stack Developer || Competitive Programmer </h2>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ritik-sethi/">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://github.com/ritiksethi21">
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a href="/">
              <i className="fa fa-user-secret fa-3x"></i>
            </a>
          </div>
        </div>

        <span className="tags bottom-tags">

          <br />

        </span>
      </div>
      <div id="mysvg">
        <Guitar className="guitarSvg" />
        <audio id="audio-1">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-1.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-2">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-2.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-3">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-3.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-4">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-4.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-5">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-5.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-6">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-6.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-7">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-7.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-8">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-8.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-9">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-9.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-10">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-10.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-11">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-11.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio-12">
          <source
            src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/guitar/smoke-on-the-water-12.mp3"
            preload="auto"
            type="audio/mp3"
          />
        </audio>
      </div>
    </div>
  );
}
