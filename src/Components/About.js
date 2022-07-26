import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="mt-1 mt-lg-3">
      <div className="d-flex justify-content-center">
        <div className="row" style={{ width: "85%" }}>
          <h4
            align="left"
            className="fw-bolder mt-5 text-blue"
          >
            About
          </h4>
          <div className="row">
            <div className="col-md-7 col-lg-7 col-sm-7 text-left fs-7">
            
                <p className="paragraph-about">
                  <font className="fw-bold text-blue">
                    Carson Tahoe Health
                  </font>
                  &nbsp;is a stunning, 352,000 square foot facility that is set
                  on a spacious 80-acre medical campus in North Carson City. The
                  beautiful facility includes 159 acute care beds with 153
                  private rooms, expanded 24-hour emergency services, advanced
                  medical imaging, acclaimed open heart surgery program with a
                  private cardiovascular unit, a 5-star Women & Children’s
                  Center, hybrid OR suite, vascular and catheterization labs, a
                  medical/surgical ICU, short-stay surgery unit, inpatient
                  rehabilitation, medical/oncology, telemetry and much more.
             
                <span className="d-flex justify-content-center mt-4">
                  <button
                    className="text-white border-0 fs-5 px-4 mx-2 bg-blue"
                    style={{
                      borderRadius: "5px 0px",
                    }}
                  >
                    Know More
                  </button>
                </span>
              </p>
            </div>
            <div className="col-md-5 col-sm-5 col-lg-5 text-right d-inline-flex">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="new1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="new2.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="new3.jpg"
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
              className="d-flex row p-0 text-white w-auto py-2 bg-blue"
              id="StickySocial"
            >
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
