import React from "react";
// import logo from "./health.jpg";
export default function Navbar() {
  return (
    <>
      <div
        className="container-fluid  pb-2 pt-2 fixed-top bg-blue"
      >
        <div className="row">
          <div className="col-lg-4 col-xl-4 col-md-5 col-sm-6 col-xs-12"
            id="FirstCol"
          >
            <div className="row float-lg-start mx-3">
              <div
                className="p-2 col-lg-4 col-md-3 col-sm-12 mx-xl-1 col-xs-6 fw-semibold button-white mb-md-1"
                id="hospital-name"
              >
                <i className="bi bi-envelope"></i> mananhospital@gmail.com
              </div>
              <div
                className="d-xs-none d-md-block px-3 py-2 col-lg-4 col-md-3 col-sm-12 col-xs-6 mx-xs-2 mt-xs-1 fw-semibold button-white"
                id="hospital-contact"
              >
                <i className="bi bi-telephone-fill"></i> +91 99632 54135
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center col-xl-4 col-sm-1 d-xs-none col-md-2 d-xs-auto"
            id="image-logo"
          >
            <a className="navbar-brand" href="#">
              <img
                src="/health.png"
                className="img-thumbnail bg-transparent mt-xs-5"
                height={"40px"}
                width={"40px"}
              ></img>
            </a>
          </div>
          <div
            className="col-lg-4 col-xl-4 px-0 col-md-5 col-sm-5 col-xs-0"
            // style={{marginRight:"-6px"}}
          >
            <ul
              className="d-flex g-0 m-0 p-0 justify-content-center text-white float-lg-end float-md-end  float-sm-end "
              id="socialData"
            >
              <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 px-3">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div
            className="container-fluid w-100 justify-content-between bg-blue"
          >
            <img
              src="/health.png"
              className="img-thumbnail bg-transparent mt-xs-5"
              height={40}
              width={40}
              id="health"
            ></img>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto align-items-center mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Doctors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Departments
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Gallery
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
