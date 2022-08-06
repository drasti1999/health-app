import React from "react";
// import logo from "./health.jpg";
export default function Navbar() {
  return (
    <>
      <div
        className="container-fluid w-100 pt-2 fixed-top"
        style={{ backgroundColor: "#184E82" }}
      >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="row">
                <div className="p-2 fs-6 col-lg-2 fw-semibold button-white" id="hospital-name">
                  <i className="bi bi-envelope"></i> mananhospital@gmail.com
                </div>
                <div className="offset-lg-1 px-3 py-2 col-lg-2 fs-6 fw-semibold button-white" id="hospital-contact">
                  <i className="bi bi-telephone-fill"></i> +91 99632 54135
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 p-0 m-0">
              {/* <a href="" className=""> */}
              <img
                src="/health.png"
                id="img-health"
                height={40}
                width={40}
                style={{ marginLeft: "45%" }}
                alt="imagedemo"
                className="border border-light border-2"
              />
              {/* </a> */}
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-12 text-white"
              id="social-media"
            >
              <div
                className="g-2 row m-0 p-0 text-center"
                style={{ float: "Right" }}
              >
                <div className="col-3">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="col-3">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="col-3">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="col-3">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center w-100 text-white mb-0">
          <h5>Indian Health University</h5>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#184E82" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
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
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Doctors
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
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
