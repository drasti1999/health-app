import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

export default class Services extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className="w-100 px-4 pt-5 bg-gray">
       <div className="container-fluid mt-4">
          <div className="offset-md-1">
            <h4
              align="left"
              className="fw-bolder"
              style={{ color: "#184E82" }}
            >
              Services
            </h4>
          </div>

          <div style={{backgroundColor: "#E6E6E6"}} className="w-100">
            <div
              style={{ backgroundColor: "#E6E6E6" }}
            >
              <Slider {...settings} className="py-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height={100}
                  >
                    <path d="M352.4 243.8l-49.83 99.5c-6.009 12-23.41 11.62-28.92-.625L216.7 216.3l-30.05 71.75L88.55 288l176.4 182.2c12.66 13.07 33.36 13.07 46.03 0l176.4-182.2l-112.1 .0052L352.4 243.8zM495.2 62.86c-54.36-46.98-137.5-38.5-187.5 13.06L288 96.25L268.3 75.92C218.3 24.36 135.2 15.88 80.81 62.86C23.37 112.5 16.84 197.6 60.18 256h105l35.93-86.25c5.508-12.88 23.66-13.12 29.54-.375l58.21 129.4l49.07-98c5.884-11.75 22.78-11.75 28.67 0l27.67 55.25h121.5C559.2 197.6 552.6 112.5 495.2 62.86z" />
                  </svg>
                  <div className="row mx-3 text-center">Cardiology</div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height={100}
                  >
                    <path d="M208 352C199.2 352 192 359.2 192 368C192 376.8 199.2 384 208 384S224 376.8 224 368C224 359.2 216.8 352 208 352zM304 384c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16S288 359.2 288 368C288 376.8 295.2 384 304 384zM496 96C504.8 96 512 88.84 512 80v-32C512 39.16 504.8 32 496 32h-480C7.164 32 0 39.16 0 48v32C0 88.84 7.164 96 16 96H32v320H16C7.164 416 0 423.2 0 432v32C0 472.8 7.164 480 16 480h480c8.836 0 16-7.164 16-16v-32c0-8.836-7.164-16-16-16H480V96H496zM416 216C416 220.4 412.4 224 408 224H272v32h104C380.4 256 384 259.6 384 264v16C384 284.4 380.4 288 376 288H272v32h69.33c25.56 0 40.8 28.48 26.62 49.75l-21.33 32C340.7 410.7 330.7 416 319.1 416H192c-10.7 0-20.69-5.347-26.62-14.25l-21.33-32C129.9 348.5 145.1 320 170.7 320H240V288H136C131.6 288 128 284.4 128 280v-16C128 259.6 131.6 256 136 256H240V224H104C99.6 224 96 220.4 96 216v-16C96 195.6 99.6 192 104 192H240V160H136C131.6 160 128 156.4 128 152v-16C128 131.6 131.6 128 136 128H240V104C240 99.6 243.6 96 248 96h16c4.4 0 8 3.6 8 8V128h104C380.4 128 384 131.6 384 136v16C384 156.4 380.4 160 376 160H272v32h136C412.4 192 416 195.6 416 200V216z" />
                  </svg>
                 <div className="row mx-3 text-center">Radiology</div>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/person-female--v1.png"
                    height={100}
                    width={100}
                  />

                 <div className="row mx-1 text-center">Women's Health</div>
                </div>
                <div>
                  <img src="./microscope.png" height={100} width={100} />

                 <div className="row mx-3 text-center">Laboratory</div>
                </div>
                <div>
                  <img src="./drugs.png" height={100} width={100} />

                 <div className="row mx-3 text-center">Pharmacy</div>
                </div>
                <div>
                  <img src="./siren.png" height={100} width={100} />
                 <div className="row mx-3 text-center">Emergency</div>
                </div>
                </Slider>
            </div>
          </div>
    </div> 
      </div>
    );
  }
}
