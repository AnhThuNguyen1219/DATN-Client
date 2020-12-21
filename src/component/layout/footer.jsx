import React from "react";

const Footer = () => {
  return (
    <>
      {/*footer1 sec start*/}
      <div className="footer">
        <div className="container">
          <div className="row footer-container">
            <div className="col-sm-12 col-lg-4 f-sec1  text-center text-lg-left">
              <h4 className="high-lighted-heading">About Us</h4>
              <p>
                We take our mission of increasing our global access to quality
                education seriously.{" "}
              </p>
              <a href="#">Read more</a>
              <h4>Social Network</h4>
              <div className="s-icons">
                <ul className="social-icons-simple">
                  <li>
                    <a href="javascript:void(0)" className="facebook-bg-hvr">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="twitter-bg-hvr">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>{" "}
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="instagram-bg-hvr">
                      <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-5 f-sec2 ">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h4 className="text-center text-md-left">Information</h4>
                  <ul className="text-center text-md-left">
                    <li>
                      <a href="javascript:void(0)">About Us</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Delivery Information</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">FAQ</a>
                    </li>
                    <li>
                      <a href="book-shop\contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="book-shop\product-listing.html">Products</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <h4 className="text-center text-md-left">Account Info</h4>
                  <ul className="text-center text-md-left">
                    <li>
                      <a href="javascript:void(0)">Login &amp; Register</a>
                    </li>
                    <li>
                      <a href="book-shop\shop-cart.html">Order History</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Shipping Info</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Refund Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Responsive Website</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Subscription</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 f-sec3  text-center text-lg-left">
              <h4>Our Portfolio</h4>
              <div className="foot-tag-list">
                <span>Classic</span>
                <span>Journal</span>
                <span>History</span>
                <span>Poetry</span>
                <span>Dictionary</span>
                <span>Shopping</span>
                <span>Fantasy</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 footer_notes">
              <p className="whitecolor text-center w-100 wow fadeInDown">
                © 2020 MegaOne. Made With Love by{" "}
                <a
                  className="web-link"
                  href="http://www.themesindustry.com/"
                  target="_blank"
                >
                  Themesindustry
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*footer1 sec end*/}
    </>
  );
};

export default Footer;