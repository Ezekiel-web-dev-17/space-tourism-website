import React, { useEffect, useState } from "react";
import "./Technology.css";
import NavBar from "../../component/NavBar/NavBar";
import logo from "../../../src/assets/shared/logo.svg";
import menu from "../../../src/assets/shared/icon-hamburger.svg";
import close from "../../../src/assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const technology = {
  launchVehicle: [
    {
      id: 1,
      heading: "LAUNCH VEHICLE",
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: {
        portrait:
          "../../../src/assets/technology/image-launch-vehicle-portrait.jpg",
        landscape:
          "../../../src/assets/technology/image-launch-vehicle-landscape.jpg",
      },
    },
  ],

  spaceport: [
    {
      id: 2,
      heading: "SPACEPORT",
      text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      image: {
        portrait: "../../../src/assets/technology/image-spaceport-portrait.jpg",
        landscape:
          "../../../src/assets/technology/image-spaceport-landscape.jpg",
      },
    },
  ],

  spaceCapsule: [
    {
      id: 3,
      heading: "SPACE CAPSULE",
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: {
        portrait:
          "../../../src/assets/technology/image-space-capsule-portrait.jpg",
        landscape:
          "../../../src/assets/technology/image-space-capsule-landscape.jpg",
      },
    },
  ],
};

const Techonology = () => {
  const [activePick, setActivePick] = useState("launchVehicle");

  const handlePickChange = (clicked) => {
    setActivePick(clicked);
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
    <div className="tech-con">
      <div className="pages-nav d-flex d-sm-none justify-content-between align-items-center pt-4 pb-0 px-4">
        <a className=" text-decoration-none" href="?">
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

      <section className="menu-dropdown w-75 d-sm-none position-relative z-3 bg-black opacity-75">
        <div className=" position-absolute">
          <img
            className="close top-0 mt-5 end-0 me-4 d-sm-none d-block"
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

      <main className="tech-terms-contain terms-contain py-lg-3 py-lg-0 pt-sm-3 pt-5 pb-0">
        <h3 className="space-launch my-lg-3 ms-sm-0 ms-2 mb-0">
          <span className="ps-sm-0 ps-3 pt-3">03</span> SPACE LAUNCH 101
        </h3>

        <div className="term-carousel-con d-flex justify-content-start flex-column pt-lg-0">
          {/* ============================================= */}

          <div className="termins-container">
            <div
              className="termin-track d-flex flex-column"
              style={{
                transform: `translateY(${
                  activePick === "launchVehicle"
                    ? "var(--percentageone)"
                    : activePick === "spaceport"
                    ? "var(--percentagetwo)"
                    : activePick === "spaceCapsule"
                    ? "var(--percentagethree)"
                    : "0%"
                })`,
              }}
            >
              <div className="technology-slide d-sm-block d-flex justify-content-lg-center justify-content-start align-items-lg-center">
                {technology.launchVehicle.map((tech) => {
                  return (
                    <div
                      key={tech.id}
                      className="tech-term-card justify-content-lg-between d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row pt-0 w-100"
                    >
                      <div className="tech-card d-flex flex-column align-items-start justify-content-start w-100 position-relative">
                        <div className="tech-text d-flex flex-column align-items-center align-items-lg-start justify-content-lg-start justify-content-center text-lg-start text-center ms-0 gap-lg-4 gap-3 w-100">
                          <p className="term text-white-50 mb-0">
                            THE TERMINOLOGY…
                          </p>

                          <div className="link-but position-absolute d-lg-none">
                            <div className="page-buttons d-flex flex-row flex-lg-column align-items-center mt-5 me-5 mb-0 pb-0 gap-4 w-100">
                              <button
                                onClick={() => {
                                  return handlePickChange("launchVehicle");
                                }}
                                className={`tech-btns bg-white text-black ${
                                  activePick === "launchVehicle" ? "active" : ""
                                }`}
                              >
                                1
                              </button>

                              <button
                                onClick={() => {
                                  return handlePickChange("spaceport");
                                }}
                                className={`tech-btns ${
                                  activePick === "spaceport" ? "active" : ""
                                }`}
                              >
                                2
                              </button>
                              <button
                                onClick={() => {
                                  return handlePickChange("spaceCapsule");
                                }}
                                className={`tech-btns  ${
                                  activePick === "spaceCapsule" ? "active" : ""
                                }`}
                              >
                                3
                              </button>
                            </div>
                          </div>

                          <h2 className="tech-term">{tech.heading}</h2>

                          <p className="about-term text-white-50 mb-lg-1 mb-5">
                            {tech.text}
                          </p>
                        </div>
                      </div>

                      <div className="tech-image card-img-one mt-0 pt-0">
                        <img
                          src={tech.image.portrait}
                          alt=""
                          className="m-0 d-lg-block d-sm-none d-none"
                        />
                        <img
                          src={tech.image.landscape}
                          alt=""
                          className="m-0 d-sm-block d-lg-none tech-image"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="technology-slide spaceport-slide d-sm-block d-flex justify-content-lg-center justify-content-start align-items-lg-center">
                {technology.spaceport.map((tech) => {
                  return (
                    <div
                      key={tech.id}
                      className="tech-term-card justify-content-lg-between d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row pt-0 w-100"
                    >
                      <div className="tech-card d-flex flex-column align-items-start justify-content-start w-100 position-relative">
                        <div className="tech-text space-launch-text d-flex flex-column align-items-center align-items-lg-start justify-content-lg-start justify-content-center text-lg-start text-center ms-0 gap-lg-4 gap-3 w-100">
                          <p className="term text-white-50 mb-0">
                            THE TERMINOLOGY…
                          </p>

                          <div className="link-but position-absolute d-lg-none">
                            <div className="page-buttons d-flex flex-row flex-lg-column align-items-center mt-5 me-5 mb-0 pb-0 gap-4 w-100">
                              <button
                                onClick={() => {
                                  return handlePickChange("launchVehicle");
                                }}
                                className={`tech-btns ${
                                  activePick === "launchVehicle" ? "active" : ""
                                }`}
                              >
                                1
                              </button>

                              <button
                                onClick={() => {
                                  return handlePickChange("spaceport");
                                }}
                                className={`tech-btns bg-white text-black ${
                                  activePick === "spaceport" ? "active" : ""
                                }`}
                              >
                                2
                              </button>
                              <button
                                onClick={() => {
                                  return handlePickChange("spaceCapsule");
                                }}
                                className={`tech-btns  ${
                                  activePick === "spaceCapsule" ? "active" : ""
                                }`}
                              >
                                3
                              </button>
                            </div>
                          </div>

                          <h2 className="tech-term">{tech.heading}</h2>

                          <p className="about-term text-white-50">
                            {tech.text}
                          </p>
                        </div>
                      </div>

                      <div className="tech-image  card-img-two mt-0 pt-0">
                        <img
                          src={tech.image.portrait}
                          alt=""
                          className="m-0 d-lg-block d-sm-none d-none"
                        />
                        <img
                          src={tech.image.landscape}
                          alt=""
                          className="m-0 d-sm-block d-lg-none tech-image"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="technology-slide spaceCapsule-slide d-sm-block d-flex justify-content-lg-center justify-content-start align-items-lg-center">
                {technology.spaceCapsule.map((tech) => {
                  return (
                    <div
                      key={tech.id}
                      className="tech-term-card justify-content-lg-between d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row pt-0 w-100"
                    >
                      <div className="tech-card d-flex flex-column align-items-start justify-content-start w-100 position-relative">
                        <div className="tech-text capsuletext-con d-flex flex-column align-items-center align-items-lg-start justify-content-lg-start justify-content-center ms-lg-5 text-lg-start text-center ms-0 gap-lg-4 gap-3">
                          <p className="term text-white-50 mb-0">
                            THE TERMINOLOGY…
                          </p>

                          <div className="link-but position-absolute d-lg-none">
                            <div className="page-buttons d-flex flex-row flex-lg-column align-items-center mt-5 me-5 mb-0 pb-0 gap-4 w-100">
                              <button
                                onClick={() => {
                                  return handlePickChange("launchVehicle");
                                }}
                                className={`tech-btns ${
                                  activePick === "launchVehicle" ? "active" : ""
                                }`}
                              >
                                1
                              </button>

                              <button
                                onClick={() => {
                                  return handlePickChange("spaceport");
                                }}
                                className={`tech-btns ${
                                  activePick === "spaceport" ? "active" : ""
                                }`}
                              >
                                2
                              </button>
                              <button
                                onClick={() => {
                                  return handlePickChange("spaceCapsule");
                                }}
                                className={`tech-btns bg-white text-black ${
                                  activePick === "spaceCapsule" ? "active" : ""
                                }`}
                              >
                                3
                              </button>
                            </div>
                          </div>

                          <h2 className="tech-term">{tech.heading}</h2>

                          <p className="about-term term-capsule text-white-50">
                            {tech.text}
                          </p>
                        </div>
                      </div>

                      <div className="tech-image card-img-one w-100 mt-0 pt-0">
                        <img
                          src={tech.image.portrait}
                          alt=""
                          className="m-0 d-lg-block d-sm-none d-none"
                        />
                        <img
                          src={tech.image.landscape}
                          alt=""
                          className="m-0 d-sm-block d-lg-none spaceCapsule-img tech-image"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="link-but position-absolute">
              <div className="page-buttons d-lg-flex flex-lg-column align-items-center mb-0 pb-0 gap-4 w-50 d-none">
                <button
                  onClick={() => {
                    return handlePickChange("launchVehicle");
                  }}
                  className={`tech-btns ${
                    activePick === "launchVehicle" ? "active" : ""
                  }`}
                >
                  1
                </button>

                <button
                  onClick={() => {
                    return handlePickChange("spaceport");
                  }}
                  className={`tech-btns ${
                    activePick === "spaceport" ? "active" : ""
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    return handlePickChange("spaceCapsule");
                  }}
                  className={`tech-btns ${
                    activePick === "spaceCapsule" ? "active" : ""
                  }`}
                >
                  3
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Techonology;
