import React, { useEffect, useState } from "react";
import "./Destination.css";
import NavBar from "../../component/NavBar/NavBar";
import lap from "../../../src/assets/assets/shared/Line.png";
import tab from "../../../src/assets/assets/shared/Line (1).png";
import mobile from "../../../src/assets/assets/shared/Line (2).png";
import logo from "../../../src/assets/assets/shared/logo.svg";
import menu from "../../../src/assets/assets/shared/icon-hamburger.svg";
import close from "../../../src/assets/assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const destinations = {
  Moon: [
    {
      id: 1,
      image: "../../../src/assets/assets/destination/image-moon.webp",
      name: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
  ],

  Mars: [
    {
      id: 2,
      image: "../../../src/assets/assets/destination/image-mars.webp",
      name: "MARS",
      text: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest Planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
  ],
  Europa: [
    {
      id: 3,
      image: "../../../src/assets/assets/destination/image-europa.webp",
      name: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3  YEARS",
    },
  ],
  Titan: [
    {
      id: 4,
      image: "../../../src/assets/assets/destination/image-titan.webp",
      name: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  ],
};

const Destination = () => {
  const [activePick, setActivePick] = useState("Moon");

  const handlePickChange = (pick) => {
    setActivePick(pick);
  };

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
    <div className="dest-con">
      <div className="pages-nav d-flex d-sm-none justify-content-between align-items-center pt-4 pb-0 px-4">
        <img
          className="d-sm-none logo "
          src={logo}
          alt=""
          width="40px"
          height="40px"
        />
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

      <main>
        <h3>
          <span>01</span> PICK YOUR DESTINATION
        </h3>
        <div className="caro-con d-flex justify-content-end flex-column pt-3 pt-lg-5 mt-3">
          <div className="link-but position-absolute">
            <div className="destin-linkers-buttons d-flex align-items-center mt-5 mb-0 pb-0 gap-4 w-100">
              <a
                href="#"
                onClick={() => {
                  return handlePickChange("Moon");
                }}
                className={`link-tags text-white ${
                  activePick === "Moon" ? "active" : ""
                }`}
              >
                Moon
              </a>

              <a
                href="#"
                onClick={() => {
                  return handlePickChange("Mars");
                }}
                className={`link-tags text-white te  ${
                  activePick === "Mars" ? "active" : ""
                }`}
              >
                Mars
              </a>
              <a
                href="#"
                onClick={() => {
                  return handlePickChange("Europa");
                }}
                className={`link-tags text-white  ${
                  activePick === "Europa" ? "active" : ""
                }`}
              >
                Europa
              </a>
              <a
                href="#"
                onClick={() => {
                  return handlePickChange("Titan");
                }}
                className={`link-tags text-white  ${
                  activePick === "Titan" ? "active" : ""
                }`}
              >
                Titan
              </a>
            </div>
          </div>

          {/* ============================================= */}

          <div className="carousel-container">
            <div
              className="destin-track"
              style={{
                transform: `translateX(${
                  activePick === "Moon"
                    ? "0%"
                    : activePick === "Mars"
                    ? "-100%"
                    : activePick === "Europa"
                    ? "-200%"
                    : activePick === "Titan"
                    ? "-300%"
                    : "0%"
                })`,
              }}
            >
              <div className="carousel-slide">
                {destinations.Moon.map((topPick) => {
                  return (
                    <div
                      key={topPick.id}
                      id="MOON"
                      className="product-card d-flex justify-content-lg-between align-item justify-content-center align-items-centers-lg-start mt-0 w-100 pt-sm-0"
                    >
                      <div className="destination-imgs w-50 mt-0 pt-0">
                        <img
                          src={topPick.image}
                          alt=""
                          className="m-0 destin-image pb-5"
                        />
                      </div>

                      <div className="destination-card d-flex flex-column align-items-start justify-content-start w-100 ">
                        <div className="nam-pri d-flex flex-column align-items-center justify-content-center align-items-lg-start justify-content-lg-start mt-0 mt-lg-5 ms-lg-5 ms-0 gap-4 position-relative">
                          <div className="d-flex justify-content-between align-items-center d-lg-none">
                            <a className="each-page" href="#MOON">
                              MOON
                            </a>
                            <a className="each-page" href="#MARS">
                              MARS
                            </a>
                            <a className="each-page" href="#EUROPA">
                              EUROPA
                            </a>
                            <a className="each-page pg" href="#TITAN">
                              TITAN
                            </a>
                          </div>
                          <p className="name mb-0">{topPick.name}</p>

                          <p className="about px-1 px-sm-5 mx-sm-2 px-lg-0 mx-lg-0 text-white-50">
                            {topPick.text}
                          </p>

                          <img
                            className="d-lg-block d-sm-none d-none w-100"
                            src={lap}
                            alt=""
                          />
                          <img
                            className="d-sm-block d-lg-none d-none w-100"
                            src={tab}
                            alt=""
                          />
                          <img
                            className="d-block d-lg-none d-sm-none w-100"
                            src={mobile}
                            alt=""
                          />

                          <div className="d-flex justify-content-between w-100 gap-sm-5 mt-1 px-sm-5 flex-column flex-sm-row gap-2">
                            <div className="">
                              <p className=" text-white-50">AVG. DISTANCE</p>
                              <p className="distance">{topPick.distance}</p>
                            </div>
                            <div className="">
                              <p className=" text-white-50">EST.TRAVEL TIME</p>
                              <p className="travel-time">
                                {topPick.travelTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="carousel-slide">
                {destinations.Mars.map((topPick) => {
                  return (
                    <div
                      key={topPick.id}
                      id="MARS"
                      className="product-card d-flex justify-content-lg-between align-items-lg-start justify-content-center align-items-center mt-0 w-100 pt-sm-0 ps-2 pe-2"
                    >
                      <div className="destination-imgs mt-0 pt-0">
                        <img
                          src={topPick.image}
                          alt=""
                          className="m-0 destin-image  pb-5"
                        />
                      </div>

                      <div className="destination-card d-flex flex-column align-items-start justify-content-start w-100">
                        <div className="nam-pri d-flex flex-column align-items-center justify-content-center align-items-lg-start justify-content-lg-start mt-0 mt-lg-4 ms-lg-5 ms-0  gap-sm-4 gap-2">
                          <div className=" d-flex justify-content-between align-items-center d-lg-none ">
                            <a className="each-page" href="#MOON">
                              MOON
                            </a>
                            <a className="each-page" href="#MARS">
                              MARS
                            </a>
                            <a className="each-page" href="#EUROPA">
                              EUROPA
                            </a>
                            <a className="each-page" href="#TITAN">
                              TITAN
                            </a>
                          </div>

                          <p className="name mb-0">{topPick.name}</p>

                          <p className="about px-sm-5 mx-sm-2 px-lg-0 mx-lg-0 text-white-50">
                            {topPick.text}
                          </p>

                          <img
                            className="d-lg-block d-sm-none d-none w-100"
                            src={lap}
                            alt=""
                          />
                          <img
                            className="d-sm-block d-lg-none d-none w-100"
                            src={tab}
                            alt=""
                          />
                          <img
                            className="d-block d-lg-none d-sm-none w-100"
                            src={mobile}
                            alt=""
                          />

                          <div className="d-flex justify-content-between w-100   gap-sm-5 mt-1 px-sm-5 flex-column flex-sm-row  gap-sm-4 gap-2">
                            <div className="">
                              <p className=" text-white-50">AVG. DISTANCE</p>
                              <p className="distance">{topPick.distance}</p>
                            </div>
                            <div className="">
                              <p className=" text-white-50">EST.TRAVEL TIME</p>
                              <p className="travel-time">
                                {topPick.travelTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="carousel-slide">
                {destinations.Europa.map((topPick) => {
                  return (
                    <div
                      key={topPick.id}
                      id="EUROPA"
                      className="product-card d-flex justify-content-lg-between align-items-lg-start  justify-content-center align-items-center mt-0 w-100 pt-sm-0  ps-2 pe-2"
                    >
                      <div className="destination-imgs w-50 mt-0 pt-0">
                        <img
                          src={topPick.image}
                          alt=""
                          className="m-0 destin-image  pb-5"
                        />
                      </div>

                      <div className="destination-card d-flex flex-column align-items-start justify-content-start w-100">
                        <div className="nam-pri d-flex flex-column align-items-center justify-content-center align-items-lg-start justify-content-lg-start mt-0 mt-lg-4 ms-lg-5 ms-0  gap-sm-4 gap-2">
                          <div className=" d-flex justify-content-between align-items-center d-lg-none">
                            <a className="each-page" href="#MOON">
                              MOON
                            </a>
                            <a className="each-page" href="#MARS">
                              MARS
                            </a>
                            <a className="each-page" href="#EUROPA">
                              EUROPA
                            </a>
                            <a className="each-page" href="#TITAN">
                              TITAN
                            </a>
                          </div>

                          <p className="name mb-0">{topPick.name}</p>

                          <p className="about px-1 px-sm-5 mx-sm-2 px-lg-0 mx-lg-0 text-white-50">
                            {topPick.text}
                          </p>
                          <img
                            className="d-lg-block d-sm-none d-none w-100"
                            src={lap}
                            alt=""
                          />
                          <img
                            className="d-sm-block d-lg-none d-none w-100"
                            src={tab}
                            alt=""
                          />
                          <img
                            className="d-block d-lg-none d-sm-none w-100"
                            src={mobile}
                            alt=""
                          />

                          <div className="d-flex justify-content-between w-100  gap-sm-5 mt-1 px-sm-5 flex-column flex-sm-row gap-2">
                            <div className="">
                              <p className=" text-white-50">AVG. DISTANCE</p>
                              <p className="distance">{topPick.distance}</p>
                            </div>
                            <div className="">
                              <p className=" text-white-50">EST.TRAVEL TIME</p>
                              <p className="travel-time">
                                {topPick.travelTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="carousel-slide">
                {destinations.Titan.map((topPick) => {
                  return (
                    <div
                      key={topPick.id}
                      id="TITAN"
                      className="product-card d-flex justify-content-lg-between align-items-lg-start  justify-content-center align-items-center mt-0 w-100 pt-sm-0  ps-0 pe-2"
                    >
                      <div className="destination-imgs w-50 mt-0 pt-0">
                        <img
                          src={topPick.image}
                          alt=""
                          className="m-0 destin-image pb-5"
                        />
                      </div>

                      <div className="destination-card d-flex flex-column align-items-start justify-content-start w-100">
                        <div className="nam-pri d-flex flex-column align-items-center justify-content-center align-items-lg-start justify-content-lg-start mt-0 mt-lg-4 ms-lg-5 ms-0 gap-sm-4 gap-2">
                          <div className=" d-flex justify-content-between align-items-center d-lg-none">
                            <a className="each-page" href="#MOON">
                              MOON
                            </a>
                            <a className="each-page" href="#MARS">
                              MARS
                            </a>
                            <a className="each-page" href="#EUROPA">
                              EUROPA
                            </a>
                            <a className="each-page" href="#TITAN">
                              TITAN
                            </a>
                          </div>

                          <p className="name mb-0">{topPick.name}</p>

                          <p className="about px-1 px-sm-5 mx-sm-2 px-lg-0 mx-lg-0   gap-sm-5 text-white-50 gap-2 ">
                            {topPick.text}
                          </p>
                          <img
                            className="d-lg-block d-sm-none d-none w-100"
                            src={lap}
                            alt=""
                          />
                          <img
                            className="d-sm-block d-lg-none d-none w-100"
                            src={tab}
                            alt=""
                          />
                          <img
                            className="d-block d-lg-none d-sm-none w-100"
                            src={mobile}
                            alt=""
                          />

                          <div className="d-flex justify-content-between w-100 mt-1 gap-sm-5 px-sm-5 flex-column flex-sm-row gap-2">
                            <div className="">
                              <p className=" text-white-50">AVG. DISTANCE</p>
                              <p className="distance">{topPick.distance}</p>
                            </div>
                            <div className="">
                              <p className=" text-white-50">EST.TRAVEL TIME</p>
                              <p className="travel-time">
                                {topPick.travelTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
