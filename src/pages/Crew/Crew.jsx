import React, { useEffect, useState } from "react";
import "./Crew.css";
import NavBar from "../../component/NavBar/NavBar";
import logo from "../../../src/assets/assets/shared/logo.svg";
import menu from "../../../src/assets/assets/shared/icon-hamburger.svg";
import close from "../../../src/assets/assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const crewDetails = {
  anoushehAnsari: [
    {
      id: 1,
      name: "ANOUSHEH ANSARI",
      role: "FLIGHT ENGINEER",
      text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "../../../src/assets/assets/crew/image-anousheh-ansari.webp",
    },
  ],
  douglasHurley: [
    {
      id: 2,
      name: "DOUGLAS HURLEY",
      role: "COMMANDER",
      text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "../../../src/assets/assets/crew/image-douglas-hurley.webp",
    },
  ],
  markShuttleworth: [
    {
      id: 3,
      name: "MARK SHUTTLEWORTH",
      role: "MISSION SPECIALIST",
      text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "../../../src/assets/assets/crew/image-mark-shuttleworth.webp",
    },
  ],
  victorGlover: [
    {
      id: 4,
      name: "VICTOR GLOVER",
      role: "PILOT",
      text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: "../../../src/assets/assets/crew/image-victor-glover.webp",
    },
  ],
};

const Crew = () => {
  const [activePick, setActivePick] = useState("anoushehAnsari");

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
    <div className="crew-con">
      <div className="pages-nav d-flex d-sm-none justify-content-between align-items-center pt-4 pb-0 px-4">
        <img
          className="d-sm-none logo "
          src={logo}
          alt=""
          width="40px"
          height="40px"
        />
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

      <main className="crew-main">
        <h3 className="ms-lg-5 crew-head">
          <span>02</span> MEET YOUR CREW
        </h3>
        <div className=" mt-5 caro-con d-flex justify-content-end flex-column">
          {/* ============================================= */}

          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(${
                  activePick === "anoushehAnsari"
                    ? "0%"
                    : activePick === "douglasHurley"
                    ? "-100%"
                    : activePick === "markShuttleworth"
                    ? "-240%"
                    : activePick === "victorGlover"
                    ? "-340%"
                    : "0%"
                })`,
              }}
            >
              <div className="carousel-slide">
                {crewDetails.douglasHurley.map((crew) => {
                  return (
                    <div
                      key={crew.id}
                      className="crew-card crew-card-doug d-flex flex-lg-row flex-column justify-content-between align-items-end mt-0 ps-0 pt-0 w-25"
                    >
                      <div className="member-card pb-lg-5 pb-0 mb-0 mb-lg-5 d-flex flex-column align-items-start justify-content-start gap-5">
                        <div className="crew-data d-flex flex-column align-items-lg-start align-items-center justify-content-center justify-content-lg-start mt-4 w-100">
                          <h3 className="mb-sm-4 text-white-50">{crew.role}</h3>
                          <h6 className="crew-name mb-0">{crew.name}</h6>

                          <p className="about-text mb-lg-1 mb-0 text-white">
                            {crew.text}
                          </p>
                        </div>
                      </div>

                      <div className="caro-but">
                        <div className="carousel-buttons d-lg-none d-flex align-items-center mb-0 pb-0 gap-4 w-50">
                          <a
                            onClick={() => {
                              return handlePickChange("anoushehAnsari");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "anoushehAnsari" ? "active" : ""
                            }`}
                          >
                            .
                          </a>

                          <a
                            onClick={() => {
                              return handlePickChange("douglasHurley");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "douglasHurley" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("markShuttleworth");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "markShuttleworth" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("victorGlover");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "victorGlover" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                        </div>
                      </div>

                      <div className="card-img mt-5 pt-0">
                        <img src={crew.image} alt="" className="m-lg-0 image" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="carousel-slide">
                {crewDetails.markShuttleworth.map((crew) => {
                  return (
                    <div
                      key={crew.id}
                      className="crew-card crew-card-mark d-flex flex-lg-row flex-column justify-content-between align-items-end mt-0 ps-0 pt-0 w-50"
                    >
                      <div className="member-card pb-lg-5 pb-0 mb-0 mb-lg-5 d-flex flex-column align-items-start justify-content-start gap-5">
                        <div className="crew-data crew-data-mark d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center mt-4 w-100">
                          <h3 className="mb-sm-4 text-white-50">{crew.role}</h3>
                          <h6 className="crew-name mb-0">{crew.name}</h6>

                          <p className="about-text mb-lg-1 mb-0 text-white">
                            {crew.text}
                          </p>
                        </div>
                      </div>

                      <div className="caro-but">
                        <div className="carousel-buttons d-lg-none d-flex align-items-center mb-0 pb-0 gap-4 w-50">
                          <a
                            onClick={() => {
                              return handlePickChange("anoushehAnsari");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "anoushehAnsari" ? "active" : ""
                            }`}
                          >
                            .
                          </a>

                          <a
                            onClick={() => {
                              return handlePickChange("douglasHurley");
                            }}
                            className={`page-dot text-white rounded-circle bg-white ${
                              activePick === "douglasHurley" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("markShuttleworth");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "markShuttleworth" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("victorGlover");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "victorGlover" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                        </div>
                      </div>

                      <div className="card-img mt-5 pt-0">
                        <img src={crew.image} alt="" className="m-lg-0 image" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="carousel-slide">
                {crewDetails.victorGlover.map((crew) => {
                  return (
                    <div
                      key={crew.id}
                      className="crew-card crew-card-victor d-flex flex-lg-row flex-column justify-content-between align-items-end mt-0 ps-0 pt-0 w-50"
                    >
                      <div className="member-card member-victor pb-lg-5 pb-0 mb-lg-5 mb-0 d-flex flex-column align-items-start justify-content-start gap-5">
                        <div className="crew-data crew-data-victor d-flex flex-column align-items-lg-start align-items-center justify-content-center justify-content-lg-start mt-4 w-100">
                          <h3 className="mb-sm-4 text-white-50">{crew.role}</h3>
                          <h6 className="crew-name mb-0">{crew.name}</h6>

                          <p className="about-text mb-lg-1 mb-0 text-white">
                            {crew.text}
                          </p>
                        </div>
                      </div>

                      <div className="caro-but">
                        <div className="carousel-buttons d-lg-none d-flex align-items-center mb-0 pb-0 gap-4 w-50">
                          <a
                            onClick={() => {
                              return handlePickChange("anoushehAnsari");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "anoushehAnsari" ? "active" : ""
                            }`}
                          >
                            .
                          </a>

                          <a
                            onClick={() => {
                              return handlePickChange("douglasHurley");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "douglasHurley" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("markShuttleworth");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "markShuttleworth" ? "active" : ""
                            }`}
                          >
                            .
                          </a>

                          <a
                            onClick={() => {
                              return handlePickChange("victorGlover");
                            }}
                            className={`page-dot asan text-white rounded-circle  ${
                              activePick === "victorGlover" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                        </div>
                      </div>

                      <div className="card-img mt-5 pt-0">
                        <img src={crew.image} alt="" className="m-lg-0 image" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="carousel-slide ansari-slide">
                {crewDetails.anoushehAnsari.map((crew) => {
                  return (
                    <div
                      key={crew.id}
                      className="crew-card crew-card-ansari d-flex flex-lg-row flex-column justify-content-between align-items-end mt-0 ps-0 pt-0 w-50"
                    >
                      <div className="member-card pb-lg-5 mb-0 mb-lg-5 d-flex flex-column align-items-start justify-content-start gap-5">
                        <div className="crew-data crew-data-ansari d-flex flex-column align-items-lg-start align-items-center justify-content-center justify-content-lg-start mt-4 w-100">
                          <h3 className="mb-4 text-white-50">{crew.role}</h3>
                          <h6 className="crew-name mb-0">{crew.name}</h6>

                          <p className="about-text mb-lg-1 mb-0 text-white">
                            {crew.text}
                          </p>
                        </div>
                      </div>

                      <div className="caro-but">
                        <div className="carousel-buttons d-lg-none d-flex align-items-center mb-0 pb-0 gap-4 w-50">
                          <a
                            onClick={() => {
                              return handlePickChange("anoushehAnsari");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "anoushehAnsari" ? "active" : ""
                            }`}
                          >
                            .
                          </a>

                          <a
                            onClick={() => {
                              return handlePickChange("douglasHurley");
                            }}
                            className={`page-dot text-white rounded-circle ${
                              activePick === "douglasHurley" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("markShuttleworth");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "markShuttleworth" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                          <a
                            onClick={() => {
                              return handlePickChange("victorGlover");
                            }}
                            className={`page-dot text-white rounded-circle  ${
                              activePick === "victorGlover" ? "active" : ""
                            }`}
                          >
                            .
                          </a>
                        </div>
                      </div>

                      <div className="card-img mt-5 pt-0">
                        <img src={crew.image} alt="" className="m-lg-0 image" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="caro-but">
              <div className="carousel-buttons d-lg-flex d-none align-items-center mb-0 pb-0 gap-4 w-50">
                <a
                  onClick={() => {
                    return handlePickChange("anoushehAnsari");
                  }}
                  className={`page-dot text-white rounded-circle ${
                    activePick === "anoushehAnsari" ? "active" : ""
                  }`}
                >
                  .
                </a>

                <a
                  onClick={() => {
                    return handlePickChange("douglasHurley");
                  }}
                  className={`page-dot text-white rounded-circle ${
                    activePick === "douglasHurley" ? "active" : ""
                  }`}
                >
                  .
                </a>
                <a
                  onClick={() => {
                    return handlePickChange("markShuttleworth");
                  }}
                  className={`page-dot text-white rounded-circle  ${
                    activePick === "markShuttleworth" ? "active" : ""
                  }`}
                >
                  .
                </a>
                <a
                  onClick={() => {
                    return handlePickChange("victorGlover");
                  }}
                  className={`page-dot text-white rounded-circle  ${
                    activePick === "victorGlover" ? "active" : ""
                  }`}
                >
                  .
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
