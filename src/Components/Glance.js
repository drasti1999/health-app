import React from "react";

export default function Glance() {
  return (
    <>
      <div className="section mt-5 mb-5 bg-blue">
        <div className="row w-100">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 my-3" id="doc">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-block">
                <h1 className="offset-lg-2 offset-md-3 h1 text-white">
                  Meet Our Most
                </h1>
                <h1 className="offset-lg-2  offset-md-3 h1 text-white">
                  Experienced Doctors
                </h1>
                <div className="offset-lg-2  offset-md-3 text-white">
                  <div className="p-2 col-lg-4 col-md-3 col-sm-12 mx-xl-1 fs-6 col-xs-6 fw-semibold button-white mb-md-1">
                    Meet Our Team
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 d-lg-flex justify-content-center">
            <img
              src="./images.jpg"
              alt=""
              className="imgDoct"
              style={{ borderRadius: "100px 0px" }}
            />
          </div>
        </div>
      </div>
      {/* At a glance */}
      <div className="section pb-3 mx-4">
        <div className="row mb-3 w-75 d-flex justify-content-lg-start justify-content-sm-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1
              align="left"
              className="fw-bolder offset-lg-1 offset-md-2 offset-3 w-100 text-blue"
              style={{ fontSize: "30px" }}
            >
              At A Glance
            </h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder text-blue"
                style={{fontSize: "5rem" }}
              >
                30+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder text-blue">
                Number Of <br /> Doctors
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder text-blue"
                style={{  fontSize: "5rem" }}
              >
                20k+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder text-blue">
                Smiling
                <br /> Faces
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder text-blue"
                style={{ fontSize: "5rem" }}
              >
                15+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder text-blue">
                Awards & <br /> Achievements
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder text-blue"
                style={{ fontSize: "5rem" }}
              >
                100+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder text-blue">
                Free Health <br /> Camps
              </h4>
            </div>
          </div>
          {/* <div>
            <div className="position-absolute top-100"></div>
            <button
              className="btn border-0 rounded-circle float-end"
              style={{ backgroundColor: "#08E908" }}
            >
              <i className="fa-brands fa-whatsapp text-white fs-1"></i>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
