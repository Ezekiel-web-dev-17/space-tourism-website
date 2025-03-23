import React, { useEffect } from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import spaceman from "../../assets/shared/Group.png";
import NavBar from "../../component/NavBar/NavBar";
import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";

const Error = () => {
  useEffect(() => {
    let clicked = document.querySelector(".menu");
    let dropdown = document.querySelector(".position-absolute");
    let close = document.querySelector(".close");

    clicked.addEventListener("click", () => {
      dropdown.classList.add("dropdown-open");
    });

    close.addEventListener("click", () => {
      dropdown.classList.remove("dropdown-open");
    });
  }, [0]);
  return (
    <div className="err">
      <div className="pages-nav d-flex d-sm-none justify-content-between align-items-center pt-4 pb-0 px-4">
        <a href="?">
          <img
            className="d-sm-none logo "
            src={logo}
            alt=""
            width="40px"
            height="40px"
          />
        </a>
        <img className="d-sm-none menu" src={menu} alt="" />
      </div>

      <NavBar />

      <section className="menu-dropdown d-sm-none w-75 position-relative z-3 bg-black opacity-75">
        <div className=" position-absolute">
          <img
            className="close top-0 mt-4 end-0 me-4 d-sm-none d-block"
            src={close}
            alt=""
          />

          <ul className="d-flex flex-column gap-4 mt-5 pt-4">
            <Link
              className="text-white text-decoration-none fw-normal fs-5"
              to="/"
            >
              <span>00</span> Home
            </Link>
            <Link
              className="text-white text-decoration-none  fw-normal fs-5"
              to="/destination"
            >
              <span>01</span> Destination
            </Link>
            <Link
              className="text-white text-decoration-none  fw-normal fs-5"
              to="/crew"
            >
              <span>02</span> Crew
            </Link>
            <Link
              className="text-white text-decoration-none  fw-normal fs-5"
              to="/technology"
            >
              <span>03</span> Technology
            </Link>
          </ul>
        </div>
      </section>

      <div className="error-con d-flex flex-lg-row flex-column gap-5 align-items-center m-lg-5 p-lg-5">
        <div className=" text-center pt-5 text-white ps-lg-5 ms-lg-5">
          <h1>404! - error</h1>
          <h3>PAGE NOT FOUND</h3>
          <h5 className="ps-lg-5 ms-lg-5">
            Your Search has ventured beyond <br /> the known Universe.
          </h5>
          <Link className=" pt text-decoration-none" to="/">
            <button className=" rounded-pill mt-3 pb-1 px-4 border-0 bg-transparent text-white fs-4 fw-semibold">
              <p className="mb-sm-0">Back To Home</p>
            </button>
          </Link>
        </div>
        <div className="mb-5">
          <img src={spaceman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Error;
