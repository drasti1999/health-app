import React from "react";

export default function Glance() {
  return (
    <>
      <div class="container-fluid mt-5 mb-5" style={{ backgroundColor: "#184E82" }}>
        <div class="row">
          <div class="col-md-6 my-3 col-sm-6" id="doc">
            <div className="row">
              <h1 className="offset-md-3 text-white">Meet Our Most</h1>
              <h1 className="offset-md-3 text-white" style={{ wordWrap: "break-word" }}>
                Experienced Doctors
              </h1>
            </div>
            <div className="row offset-md-3 ">
              <button className="button-white border-0" style={{width: "fit-content",padding: "10px"}} id="btnDoc">
                Meet Our Team
              </button>
            </div>
          </div>
          <div class="col offset-md-2" id="imgDoc">
            <img
              src="./images.jpg" 
              alt=""
              className="mx-sm-5 img1"
              style={{ borderRadius: "100px 0px" }}
            />
          </div>
        </div>
      </div>
      {/* At a glance */}

      <div className="container mb-5">
        <div className="row">
          <h1
            align="left"
            className="fw-bolder"
            style={{ color: "#184E82"}}
          >
            At A Glance
          </h1>
        </div>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder"
                style={{ color: "#184E82", fontSize: "5rem" }}
              >
                30+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder" style={{ color: "#184E82" }}>
                Number Of <br /> Doctors
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder"
                style={{ color: "#184E82", fontSize: "5rem" }}
              >
                20k+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder" style={{ color: "#184E82" }}>
                Smiling
                <br /> Faces
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder"
                style={{ color: "#184E82", fontSize: "5rem" }}
              >
                15+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder" style={{ color: "#184E82" }}>
                Awards & <br /> Achievements
              </h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="row">
              <p
                className="fw-bolder"
                style={{ color: "#184E82", fontSize: "5rem" }}
              >
                100+
              </p>
            </div>
            <div className="row">
              <h4 className="fw-bolder" style={{ color: "#184E82" }}>
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
