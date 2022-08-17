import React, { useState } from "react";
import data from "../data/images.json"
import Modal from "./Modal";
import "../index.css"

export default function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div className="container-fluid mt-5 pb-4 mx-0">
      <div className="offset-1">
      <div className="row">
        <h4 align="left" className="fw-bolder ms-0 text-blue">
          Gallery
        </h4>
      </div>
      {/* <div className="container-fluid w-100 bg-danger"> */}
        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3"> */}
        <div className="col-11 row g-1">
        {data.data.map((item, index) => (
          <div className="col-lg-4 col-sm-6 col-md-6 mt-1 container-custom" key={index}>
            <img
              src={item.link}
              className="img-thumbnail rounded-3 modal-target"
              alt={item.text}
            />
            <div className="middle">
              <div>
                <h6 className="fw-bolder">Health System</h6>
              </div>
              <div>
                <p className="fw-semibold">
                  {item.text}
                </p>
              </div>
              <div>
                <div>
                  <button
                    className="px-3 py-2 bg-black"
                    onClick={() => handleClick(item, index)}
                  >
                    <i className="bi bi-zoom-in text-white fw-bolder"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>  
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  );
}
