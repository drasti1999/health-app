import React from "react";

export default function Footer() {
  return (
    <>
    <div
      className="container-fluid mt-3 pt-5 pb-5"
      style={{ backgroundColor: "#184E82" }}
    >
      <div className="row mx-lg-5 text-white"  style={{wordWrap: "break-word"}}>
        <div className="col-sm-4">
          <div className="row-2 mb-2">
            <h5 className="text-white fw-bolder">
              <i className="fa fa-plus "></i>
              Manan Hospital  
            </h5>
          </div>
          <div className="row mb-2">
            <div className="col-1">
              <i
                className="fa fa-location-dot mt-2 fw-bolder text-white"
                aria-hidden="true"
              ></i>
            </div>
            <div className="col-8 fs-9">
              Nidhi Hospital, Stadium Commerce College Road
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-1">
              <i
                className="fa fa-phone mt-2 fw-bolder text-white"
                aria-hidden="true"
              ></i>
            </div>
            <div className="col fs-9">+91 90123 45678</div>
          </div>
          <div className="row mb-2">
            <div className="col-1">
              <i className="bi bi-envelope mt-2 fs-9 fw-bolder text-white"></i>
            </div>
            <div className="col fs-9">mananhospital@gmail.com</div>
          </div>
          <div className="row">
            <div className="col  text-white" id="social-media">
              <div>
               
                  <i className="fa-brands fa-facebook-f fs-9 mx-2"></i>
              
                  <i className="fa-brands fa-instagram fs-9 mx-2"></i>
               
                  <i className="fa-brands fa-twitter fs-9 mx-2"></i>
               
                  <i className="fa-brands fa-linkedin-in fs-9 mx-2"></i>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h5 className="text-white text-uppercase">Quick Links</h5>
          </div>
          <div className="row mt-2 mb-2" style={{ marginRight: "30px" }}>
            <div className="col fs-9">
              <a
                href=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "2",
                  marginRight:"10px"
                }}
              ><span style={{borderBottom: "3px solid gray"}}>
                About</span>
              </a>
           
              <a
                href=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "2",
                  marginRight:"10px"
                }}
              ><span style={{borderBottom: "3px solid gray"}}>
                Departments</span>
              </a>
           
              <a
                href=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "2",
                  marginRight:"10px"
                }}
              ><span style={{borderBottom: "3px solid gray"}}>
                Doctors</span>
              </a>
           
              <a
                href=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "2",
                  marginRight:"10px"
                }}
              ><span style={{borderBottom: "3px solid gray"}}>
                Gallery</span>
              </a>
           
             
                <a
                  href=""
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingBottom: "2",
                  }}
                ><span style={{borderBottom: "3px solid gray"}}>Contact</span></a>
             
            </div>
          </div>
          <div className="row fs-9 align-start">
            <p style={{ textAlign: "justify",textJustify: "inter-word"}}>
              Carson Taohe Health is a Comprehensive healthcare network
              featuring two hospitals, two urgent cares,an emergent care center,
              poutpatient services and a provider network with 21 regional
              locations. Our reach strtches far and wide, encompassing Carson
              City, Minden, Gardenerville, Carson Valley, South Reno, Dayton,
              Lake Tahoe, Yerington, and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="text-center py-3" style={{backgroundColor:"#434343",color:"#c3c4c4",wordSpacing:"2px"}}>
      2021 &copy; Vaistra Technologies | Site Map | Website Privacy Policy
    </div>
    </>
  );
}
