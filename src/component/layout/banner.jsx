import React from "react";
const Banner = () => {
  return (
    <>
      <div className="homer-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-center text-lg-left">
              <div className="banner-description">
                <h1 className="w-sm-100 w-md-100 w-lg-25 animated fadeInLeft delay-1s">
                  BỘ SƯU TẬP <span>SÁCH</span>
                </h1>
                <a
                  href="/"
                  className="btn animated fadeInLeft delay-1s"
                >
                  ĐÁNH GIÁ NGAY{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;