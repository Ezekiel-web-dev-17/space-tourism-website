import React, { useEffect } from "react";
import "./Home.css";
import NavBar from "../../component/NavBar/NavBar";
// import logo from "../../../src/assets/assets/shared/logo.svg";
// import menu from "../../../src/assets/assets/shared/icon-hamburger.svg";
// import close from "../../../src/assets/assets/shared/icon-close.svg";
// import { Link } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const Home = () => {
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
    <div className="home-body">
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
        <img
          // onClick={setClosedBurger(true)}
          className="d-sm-none menu"
          src={menu}
          alt=""
        />
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
      <section className="home-con p-lg-5 mt-5 mx-lg-5 d-flex">
        <div className="home-text text-lg-start text-sm-center">
          <p className="firstp">SO, YOU WANT TO TRAVEL TO</p>

          <h1 className="w-100 mb-2">SPACE</h1>

          <p className="w-100 flex-wrap">
            Let's face it: if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home-btn">
          <a href="/destination">
            <button className="rounded-circle bg-white">EXPLORE</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
