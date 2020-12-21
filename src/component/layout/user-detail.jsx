import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardBook } from "./list_book";

const UserInfor = (props) => {
  return (
    <>
      <div id="about-tab" className="tabcontent">
        <div className="pb-0 pb-sm-2">
          <h1 className="title title--h1 first-title title__separate">
            About Me
          </h1>
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </div>
        {/* What */}
        <div className="mt-1">
          <h2 className="title title--h3">What I'm Doing</h2>
          <div className="row">
            {/* Case Item */}
            <div className="col-12 col-lg-6">
              <div className="case-item">
                <img
                  className="case-item__icon"
                  src="assets\icons\icon-design.svg"
                  alt
                />
                <div>
                  <h3 className="title title--h4">Web Design</h3>
                  <p className="case-item__caption">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </div>
              </div>
            </div>
            {/* Case Item */}
            <div className="col-12 col-lg-6">
              <div className="case-item">
                <img
                  className="case-item__icon"
                  src="assets\icons\icon-dev.svg"
                  alt
                />
                <div>
                  <h3 className="title title--h4">Web Development</h3>
                  <p className="case-item__caption">
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </div>
            </div>
            {/* Case Item */}
            <div className="col-12 col-lg-6">
              <div className="case-item">
                <img
                  className="case-item__icon"
                  src="assets\icons\icon-app.svg"
                  alt
                />
                <div>
                  <h3 className="title title--h4">Mobile Apps</h3>
                  <p className="case-item__caption">
                    Professional development of applications for iOS and
                    Android.
                  </p>
                </div>
              </div>
            </div>
            {/* Case Item */}
            <div className="col-12 col-lg-6">
              <div className="case-item">
                <img
                  className="case-item__icon"
                  src="assets\icons\icon-photo.svg"
                  alt
                />
                <div>
                  <h3 className="title title--h4">Photography</h3>
                  <p className="case-item__caption">
                    I make high-quality photos of any category at a professional
                    level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-2">
          <h2 className="title title--h3">Testimonials</h2>
          <div className="swiper-container js-carousel-review">
            <div className="swiper-wrapper">
              {/* Item review */}
              <div className="swiper-slide review-item">
                <svg className="avatar avatar--80" viewBox="0 0 84 84">
                  <g className="avatar__hexagon">
                    <image
                      xlinkHref="assets/img/avatar-2.jpg"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </svg>
                <div className="review-item__textbox">
                  <h4 className="title title--h5">Daniel Lewis</h4>
                  <p className="review-item__caption">
                    Felecia was hired to create a corporate identity. We were
                    very pleased with the work done.
                  </p>
                </div>
              </div>
              {/* Item review */}
              <div className="swiper-slide review-item">
                <svg className="avatar avatar--80" viewBox="0 0 84 84">
                  <g className="avatar__hexagon">
                    <image
                      xlinkHref="assets/img/avatar-3.jpg"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </svg>
                <div className="review-item__textbox">
                  <h4 className="title title--h5">Jessica Miller</h4>
                  <p className="review-item__caption">
                    thanks to the skill of Felecia, we have a design that we can
                    be proud of.
                  </p>
                </div>
              </div>
              {/* Item review */}
              <div className="swiper-slide review-item">
                <svg className="avatar avatar--80" viewBox="0 0 84 84">
                  <g className="avatar__hexagon">
                    <image
                      xlinkHref="assets/img/avatar-4.jpg"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </svg>
                <div className="review-item__textbox">
                  <h4 className="title title--h5">Tanya Ruiz</h4>
                  <p className="review-item__caption">
                    Felecia was hired to create a corporate identity. We were
                    very pleased with the work done.
                  </p>
                </div>
              </div>
              {/* Item review */}
              <div className="swiper-slide review-item">
                <svg className="avatar avatar--80" viewBox="0 0 84 84">
                  <g className="avatar__hexagon">
                    <image
                      xlinkHref="assets/img/avatar-5.jpg"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </svg>
                <div className="review-item__textbox">
                  <h4 className="title title--h5">Thomas Castro</h4>
                  <p className="review-item__caption">
                    thanks to the skill of Felecia, we have a design that we can
                    be proud of.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        {/* Clients */}
        <div className="mt-4">
          <h2 className="title title--h3">Clients</h2>
          <div className="swiper-container js-carousel-clients">
            <div className="swiper-wrapper">
              {/* Item client */}
              <div className="swiper-slide">
                <a href="#">
                  <img src="assets\img\logo-1.svg" alt="Logo" />
                </a>
              </div>
              {/* Item client */}
              <div className="swiper-slide">
                <a href="#">
                  <img src="assets\img\logo-2.svg" alt="Logo" />
                </a>
              </div>
              {/* Item client */}
              <div className="swiper-slide">
                <a href="#">
                  <img src="assets\img\logo-3.svg" alt="Logo" />
                </a>
              </div>
              {/* Item client */}
              <div className="swiper-slide">
                <a href="#">
                  <img src="assets\img\logo-4.svg" alt="Logo" />
                </a>
              </div>
              {/* Item client */}
              <div className="swiper-slide">
                <a href="#">
                  <img src="assets\img\logo-1.svg" alt="Logo" />
                </a>
              </div>
              {/* Item client */}
              <div className="swiper-slide">
                <a href="#">
                  <img src="assets\img\logo-2.svg" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </>
  );
};

const UserListBlog = (props) => {
  return (
    <>
      <div id="blog-tab" className="tabcontent">
        <div className="pb-2">
          <h4 className="title title--h1 first-title title__separate">
            Đánh giá
          </h4>
        </div>
        {/* News */}
        <div className="news-grid">
          {/* Post */}
          {props.review.review.map((rev) => (
            <ThumnailBlog review={rev} />
          ))}
        </div>
      </div>
    </>
  );
};

const ThumnailBlog = (props) => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var d= new Date(props.review.created_at).toLocaleDateString([],options);
  console.log(d)
  return (
    <>
    <div>{d}</div>
      <a className="media blog" href="" style = {{textDecoration:"none"}} >
        <img
          src={props.review.book_cover}
          className="align-self-center mr-3"
          alt="..."
        />
        <div className="media-body">
          <div className=" row">
            <h5 className="mt-0 col-7">{props.review.title}</h5>
            <p className="mt-0 col-5">
              Đánh giá: {props.review.rating}
              <i className="lni lni-heart-filled"></i>
            </p>
          </div>
          <hr style={{margin:"0px"}}/>
          <div
                            className="content"
                            dangerouslySetInnerHTML={{ __html: props.review.review }}
                          ></div>
          
        </div>
      </a>
    </>
  );
};

const UserDetail = (props) => {
  const [userInfor, setUserInfor] = useState({});
  const [dob, setDOB] = useState("");
  const [bookInfor, setBookInfor] = useState({ books: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState({ review: [] });

  const userstring = "http://localhost:9000/api/user/" + props.userID;
  const userfavourstring =
    "http://localhost:9000/api/user/" + props.userID + "/favourite";

  const userreviewstring =
    "http://localhost:9000/api/user/" + props.userID + "/review";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const user = await axios(userstring);

      if (user.status == 200) {
        setUserInfor(user.data);
        setDOB(user.data.dob);
        var d = new Intl.DateTimeFormat("vi-VN", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }).format(new Date(user.data.dob));
        setDOB(d.toLocaleString());
        setIsLoading(false);
      }

      const bookFavour = await axios(userfavourstring);
      if (bookFavour.status == 200) {
        setBookInfor(bookFavour.data);
        setIsLoading(false);
      }

      const bookReview = await axios(userreviewstring);
      if (bookReview.status == 200) {
        setReview(bookReview.data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="main">
        {/* Header Image */}
        <div className="header-image">
          <div
            className="js-parallax"
            style={{
              backgroundImage:
                "url(https://images.coplusk.net/project_images/203629/image/2017-11-08-161912-p57.jpg)",
            }}
          />
        </div>
        <div className="container gutter-top">
          {/* Header */}
          <header className="header box">
            <div className="header__left">
              <div className="header__photo">
                <img
                  className="header__photo-img"
                  src={userInfor.avatar_url}
                  alt={userInfor.username}
                />
              </div>
              <div className="header__base-info">
                <h4 className="title titl--h4">{userInfor.username}</h4>
                {/* <div className="status">Creative Director</div> */}
                <ul className="header__social">
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="font-icon icon-facebook1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i className="font-icon icon-twitter1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <i className="font-icon icon-instagram1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__right">
              <ul className="header__contact">
                <li>
                  <span className="overhead">Tên người dùng</span>
                  {userInfor.username}
                </li>
              </ul>
              <ul className="header__contact">
                <li>
                  <span className="overhead">Ngày sinh</span>
                  {dob}
                </li>
              </ul>
            </div>
          </header>
          <div className="row sticky-parent">
            {/* Sidebar nav */}
            <aside className="col-12 col-md-12 col-lg-2">
              <div className="sidebar box sticky-column">
                <ul className="nav js-tabs">
                  <li className="nav__item">
                    <a
                      className="active"
                      href="#favourite-tab"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="lni lni-heart"></i>
                      Yêu thích
                    </a>
                  </li>
                  <hr />
                  <li className="nav__item">
                    <a href="#blog-tab" style={{ textDecoration: "none" }}>
                      <i className="icon-book-open" />
                      Đánh giá
                    </a>
                  </li>
                  <hr />
                  <li className="nav__item">
                    <a href="#about-tab" style={{ textDecoration: "none" }}>
                      <i className="icon-user" />
                      Thông tin
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            {/* Content */}
            <div className="col-12 col-md-12 col-lg-10">
              <div className="box box-content" id="content">
                <div className="content">
                  {/* FAVOURITE */}
                  <div id="favourite-tab" className="tabcontent active">
                    <div className="pb-2">
                      <h4 className="title title--h1 first-title title__separate">
                        Danh sách yêu thích
                      </h4>
                    </div>
                    {/* Filter */}
                    {/* <div className="select">
                      <span className="placeholder">Select category</span>
                      <ul className="filter">
                        <li className="filter__item">Category</li>
                        <li className="filter__item active" data-filter="*">
                          <a className="filter__link active" href="#filter">
                            All
                          </a>
                        </li>
                        <li
                          className="filter__item"
                          data-filter=".category-concept"
                        >
                          <a className="filter__link" href="#filter">
                            Concept
                          </a>
                        </li>
                        <li
                          className="filter__item"
                          data-filter=".category-design"
                        >
                          <a className="filter__link" href="#filter">
                            Design
                          </a>
                        </li>
                        <li
                          className="filter__item"
                          data-filter=".category-life"
                        >
                          <a className="filter__link" href="#filter">
                            Life
                          </a>
                        </li>
                      </ul>
                      <input type="hidden" name="changemetoo" />
                    </div> */}
                    {/* List favourite */}
                    <div className="container">
                      <div className="row">
                        {/* <div className="gutter-sizer" /> */}
                        {bookInfor.books.map((data) => (
                          <>
                            <CardBook
                              Id={data.id}
                              Cover={data.cover}
                              Title={data.title}
                            ></CardBook>
                          </>
                        ))}
                      </div>
                    </div>
                    {/* List favourite End */}
                  </div>
                  {/* BLOG */}
                  <UserListBlog review={review}></UserListBlog>
                  {console.log(review)}
                  {/* ABOUT */}
                  <UserInfor />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="back-to-top" />
      {/* SVG masks */}
      <svg className="svg-defs">
        <clipPath id="avatar-box">
          <path d="M1.85379 38.4859C2.9221 18.6653 18.6653 2.92275 38.4858 1.85453 56.0986.905299 77.2792 0 94 0c16.721 0 37.901.905299 55.514 1.85453 19.821 1.06822 35.564 16.81077 36.632 36.63137C187.095 56.0922 188 77.267 188 94c0 16.733-.905 37.908-1.854 55.514-1.068 19.821-16.811 35.563-36.632 36.631C131.901 187.095 110.721 188 94 188c-16.7208 0-37.9014-.905-55.5142-1.855-19.8205-1.068-35.5637-16.81-36.63201-36.631C.904831 131.908 0 110.733 0 94c0-16.733.904831-37.9078 1.85379-55.5141z" />
        </clipPath>
        <clipPath id="avatar-hexagon">
          <path d="M0 27.2891c0-4.6662 2.4889-8.976 6.52491-11.2986L31.308 1.72845c3.98-2.290382 8.8697-2.305446 12.8637-.03963l25.234 14.31558C73.4807 18.3162 76 22.6478 76 27.3426V56.684c0 4.6805-2.5041 9.0013-6.5597 11.3186L44.4317 82.2915c-3.9869 2.278-8.8765 2.278-12.8634 0L6.55974 68.0026C2.50414 65.6853 0 61.3645 0 56.684V27.2891z" />
        </clipPath>
      </svg>
    </>
  );
};
export default UserDetail;
