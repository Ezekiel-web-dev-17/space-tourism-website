import React from "react";
import "./NavBar.css";
import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="d-none d-sm-flex gap-0 align-items-center pt-sm-0 pt-lg-5 ps-5">
      <a href="?">
        <img className="pe-5" src={logo} alt="" />
      </a>

      <div className="w-100 bg-primary-subtle d-lg-block d-sm-none seperator"></div>

      <div className="links d-flex justify-content-between align-items-center w-100 px-5 py-4">
        <Link className="link nav-link text-white" to="/">
          <p>Home</p>
        </Link>
        <Link className="link nav-link text-white" to="/destination">
          <p>
            <span>01</span> Destination
          </p>
        </Link>
        <Link className="link nav-link text-white" to="/crew">
          <p>
            <span>02</span> Crew
          </p>
        </Link>
        <Link className="link nav-link text-white" to="/technology">
          <p>
            <span>03</span> Technology
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
