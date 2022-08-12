import React from "react";

export default function Home() {
  return (
    <>
      <div className="container-fluid margin-top p-0 h-100">
        <div
          id="carouselExampleCaptions"
          class="carousel slide h-100"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner h-100">
            <div class="carousel-item active">
              <img
                src="new1.jpg"
                class="d-block image-responsive image-custom"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Health App</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="new2.jpg"
                class="d-block w-100 image-responsive image-custom"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Health App</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="new3.jpg"
                class="d-block w-100  image-responsive image-custom"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Health App</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          {/* <div className="position-absolute top-100">
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
