import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div id="nav-bar">
        {/* <a href="https://www.google.com">
          <img
            className="logo"
            src="https://i.ibb.co/Sm3WMtP/circle-cropped.png"
            alt="logo"
          />
        </a> */}

        <nav>
          <NavLink
            to={process.env.PUBLIC_URL + "/"}
            className="link"
            activeClassName="active-nav"
            exact
          >
            <i className="fas fa-home fa-2x"></i>
            <div className="overlay">
              <div className="text">HOME</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/about"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="image fas fa-user fa-2x"></i>
            <div className="overlay">
              <div className="text">ABOUT ME</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/skills"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-code fa-2x"></i>
            <div className="overlay">
              <div className="text">SKILLS</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/work"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-heart fa-2x"></i>
            <div className="overlay">
              <div className="text">MY WORK</div>
            </div>
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/contact"}
            className="link"
            activeClassName="active-nav"
          >
            <i className="fas fa-envelope fa-2x"></i>
            <div className="overlay">
              <div className="text">CONTACT</div>
            </div>
          </NavLink>
        </nav>
        <ul>
          <li>
          </li>
          <li>
           
          </li>
          <li>
            
          </li>
        </ul>
      </div>

      <a className="bkmrk" target="_blank"
        href="./Resume.pdf"
      >
        <img
          src="https://i.ibb.co/XsPgb1G/blogdark-1.png"
          alt="Resume"
        />
        <span className="folded-corner"></span>
      </a>
    </>
  );
}
