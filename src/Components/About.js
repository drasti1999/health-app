import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="container-fluid mt-5">
      <div className="offset-1">
        <div className="row">
          <h4 align="left" className="fw-bolder mt-5" style={{ color: "#184E82" }}>
            About
          </h4>
          <div className="row">
            <div className="col-md-7 text-left fs-5 d-inline-flex">
              <p style={{ textAlign: "justify",textJustify: "inter-word"}}>
                <font color="#184E82" className="fw-bold">
                  Carson Tahoe Health 
                </font>
                &nbsp;is a stunning, 352,000 square foot facility that is set on a
                spacious 80-acre medical campus in North Carson City. The
                beautiful facility includes 159 acute care beds with 153 private
                rooms, expanded 24-hour emergency services, advanced medical
                imaging, acclaimed open heart surgery program with a private
                cardiovascular unit, a 5-star Women & Children’s Center, hybrid
                OR suite, vascular and catheterization labs, a medical/surgical
                ICU, short-stay surgery unit, inpatient rehabilitation,
                medical/oncology, telemetry and much more.<button
            className="text-white border-0 fs-5 px-4 mx-2"
            style={{ backgroundColor: "#184E82", borderRadius: "5px 0px" }}
          >
            Know More
          </button>
              </p>
            </div>
            <div className="col-md-4 text-right d-inline-flex">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="./hospital1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="./hospital2.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="./hospital3.jpg"
                      alt="First slide"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div
              className="p-2 text-white w-auto"
              id="StickySocial"
              style={{
                transform: "translate(-50%)",
                left: "99%",
                top: "70%",
                position: "fixed",
                backgroundColor: "#184E82",
                height: "fit-content",
              }}
            >
              <div className="col">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="col">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="col">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="col">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
