import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid mt-3 pt-5 pb-5 px-sm-4 px-3"
        style={{ backgroundColor: "#184E82" }}
      >
        <div
          className="row mx-lg-5 text-white"
          style={{ wordWrap: "break-word" }}
        >
          <div className="col-sm-4 col-xs-2 col-md-4 col-lg-4 col-xl-4">
            <div className="row mb-2">
              <div className="col-1">
                <h5 className="text-white fw-bolder">
                  <i className="fa fa-plus "></i>
                </h5>
              </div>
              <div className="col-11 fs-9">
                <h5 className="text-white fw-bolder">Manan Hospital</h5>
              </div>
            </div>
            <div className="row  dataRow mb-2">
              {/* <div className="col-sm-1 col-lg-1 col-md-1 col-xs-1 col-xl-1 col-xs-1"> */}
              <div className="col-sm-1 col-lg-1 col-md-1 col-xs-1 col-xl-1 col-xs-1">
                <i
                  className="fa fa-location-dot mt-2 fw-bolder text-white"
                  aria-hidden="true"
                ></i>
              </div>
              {/* <div className="col-lg-11 col-xl-11 col-md-11 col-sm-11 col-xs-11" style={{wordWrap:"break-word"}}> */}
              <div className="col" style={{ wordWrap: "break-word" }}>
                Nidhi Hospital, Stadium Commerce College Road
              </div>
            </div>
            <div className="row  dataRow mb-2">
              <div className="col-sm-1 col-lg-1 col-md-1 col-xs-1 col-xl-1">
                <i
                  className="fa fa-phone mt-2 fw-bolder text-white"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-xs-8 fs-9  ">
                +91 90123 45678
              </div>
            </div>
            <div className="row dataRow mb-2">
              <div className="col-sm-1 col-lg-1 col-md-1 col-xs-1 col-xl-1">
                <i className="bi bi-envelope mt-2 fs-9 fw-bolder text-white"></i>
              </div>
              <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8 w-sm-auto col-xs-8 fs-9  ">
                mananhospital@gmail.com
              </div>
            </div>
            <div className="row mb-2">              
                <div className="col-lg-12 col-xl-8 col-md-8 col-sm-8 w-sm-auto col-xs-8 fs-9">
                  <a href="">
                    <i className="fa-brands fa-facebook-f fs-9 text-white"></i>
                  </a>
                  <a href=""  className="mx-2">
                    <i className="fa-brands fa-instagram fs-9 mx-1 text-white"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter fs-9 mx-1 text-white"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in fs-9 mx-2 text-white"></i>
                  </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-6">
            <div className="row">
              <h5 className="text-white text-uppercase">Quick Links</h5>
            </div>
            <div className="row mt-2 mb-2">
              <div className="col fs-9">
                <a
                  href=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingBottom: "2",
                    marginRight: "10px",
                  }}
                >
                  <span style={{ borderBottom: "3px solid gray" }}>About</span>
                </a>

                <a
                  href=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingBottom: "2",
                    marginRight: "10px",
                  }}
                >
                  <span style={{ borderBottom: "3px solid gray" }}>
                    Departments
                  </span>
                </a>

                <a
                  href=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingBottom: "2",
                    marginRight: "10px",
                  }}
                >
                  <span style={{ borderBottom: "3px solid gray" }}>
                    Doctors
                  </span>
                </a>

                <a
                  href=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingBottom: "2",
                    marginRight: "10px",
                  }}
                >
                  <span style={{ borderBottom: "3px solid gray" }}>
                    Gallery
                  </span>
                </a>

                <a
                  href=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingBottom: "2",
                  }}
                >
                  <span style={{ borderBottom: "3px solid gray" }}>
                    Contact
                  </span>
                </a>
              </div>
            </div>
            <div className="row fs-9 align-start">
              <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                Carson Taohe Health is a Comprehensive healthcare network
                featuring two hospitals, two urgent cares,an emergent care
                center, poutpatient services and a provider network with 21
                regional locations. Our reach strtches far and wide,
                encompassing Carson City, Minden, Gardenerville, Carson Valley,
                South Reno, Dayton, Lake Tahoe, Yerington, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center py-3"
        style={{
          backgroundColor: "#434343",
          color: "#c3c4c4",
          wordSpacing: "2px",
        }}
      >
        2021 &copy; Vaistra Technologies | Site Map | Website Privacy Policy
      </div>
    </>
  );
}
