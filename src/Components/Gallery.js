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
        <h4 align="left" className="fw-bolder" style={{ color: "#184E82",marginLeft:"0px" }}>
          Gallery
        </h4>
      </div>
      {/* <div class="container-fluid w-100 bg-danger"> */}
        {/* <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3"> */}
        <div class="col-11 row g-1">
        {data.data.map((item, index) => (
          <div class="col-lg-4 col-md-3 mt-1 container-custom" key={index}>
            <img
              src={item.link}
              class="img-thumbnail rounded-3 modal-target"
              alt={item.text}
            />
            <div class="middle">
              <div>
                <h6 class="fw-bolder">Health System</h6>
              </div>
              <div>
                <p class="fw-semibold">
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
