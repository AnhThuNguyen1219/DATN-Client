import React, { useState } from "react";

import { selectUser } from "../../action/UserAction";
import { useSelector, useDispatch } from "react-redux";
import login from "../../service/LoginService.jsx";
import { useHistory, Link, Redirect } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Collapse, CardBody, Card } from "reactstrap";

const Category = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
        <ul className="dropdown-title bottom10">
          <li>
            <i className="lni-angle-double-right right-arrow" />
            <a
              className="dropdown-item"
              href={`/category/${props.category.id}`}
            >
              {props.category.name}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideMenuCategories = (props) => {
  return (
    <>
      <ul className="navbar-nav mt-2">
        <li className="nav-item">
          <a className="nav-link" href="\">
            Thể loại
          </a>
        </li>
      </ul>
    </>
  );
};

const SideMenu = () => {
  return (
    <>
      {/* side menu */}
      <div className="side-menu opacity-0 gradient-bg hidden">
        <div className="inner-wrapper">
          <span
            className="btn-close btn-close-no-padding"
            id="btn_sideNavClose"
          >
            <i />
            <i />
          </span>
          <nav className="side-nav w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="\">
                  {" "}
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link collapsePagesSideMenu"
                  data-toggle="collapse"
                  href="#sideNavPages1"
                >
                  BOOK'S CATEGORIES <i className="fas fa-chevron-down" />
                </a>
                <div id="sideNavPages1" className="collapse sideNavPages">
                  <SideMenuCategories />
                  <SideMenuCategories />
                  <SideMenuCategories />
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="side-footer w-100">
            <div className="row">
              <button
                type="button"
                className="btn btn-outline-dark col-6 sidelogin_toggle"
                id="log-in-btn"
              >
                LOG IN
              </button>{" "}
              <button
                type="button"
                className="btn btn-outline-dark col-6 sidelogin_toggle "
                id="sign-up-btn"
              >
                SIGN UP
              </button>
            </div>
            <ul className="social-icons-simple white top40">
              <li>
                <a className="facebook-bg-hvr" href="javascript:void(0)">
                  <i className="fab fa-facebook-f" />{" "}
                </a>{" "}
              </li>
              <li>
                <a className="twitter-bg-hvr" href="javascript:void(0)">
                  <i className="fab fa-twitter" />{" "}
                </a>{" "}
              </li>
              <li>
                <a className="instagram-bg-hvr" href="javascript:void(0)">
                  <i className="fab fa-instagram" />{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="close_side_menu" className="tooltip" />
    </>
  );
};
const Avatar = () => {
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("user-id");
  const name = localStorage.getItem("user-name");
  const ava = localStorage.getItem("user-ava");
  const dob = localStorage.getItem("user-dob");
  function handleLogout(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  }
  if (token == null)
    return (
      <>
        <li className="d-inline-block mini-menu-card">
          <a
            href="javascript:void(0)"
            className="d-inline-block sidelogin_btn d-block "
            id="sidelogin_toggle"
          >
            <i className="lni lni-enter" />
          </a>
        </li>
      </>
    );
  else {
    return (
      <li className="d-inline-block mini-menu-card">
        <div className="media">
          <img src={ava} className="align-self-center avatar" alt="..." />

          {/* <div className="media-body"> */}
          <div className="dropdown">
            <button
              type="button"
              className="btn dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">User Information</span>
            </button>
            <div className="dropdown-menu">
              <a href={`/user/${id}`} className="dropdown-item" id={id}>
                {name}
              </a>
              <a className="dropdown-item" href="#">
                Cài đặt
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={handleLogout}>
                <i className="lni lni-exit"></i>
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </li>
    );
  }
};

const SideLogin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userInfor, setUserInfo] = useState();
  const [waitingLogin, setWaitingLogin] = useState(false);
  const history = useHistory();
  const dispatchUserInfo = useDispatch();

  function handleLoginClick(event) {
    event.preventDefault();

    // setUserInfo(response.data);
    // console.log(response.data.accessToken);
    // return dispatchUserInfo(selectUser(userInfor));
    setWaitingLogin(true);
    login(username, password).then(([status, data]) => {
      if (status == 200) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user-id", data.id);
        localStorage.setItem("user-name", data.username);
        localStorage.setItem("user-ava", data.avatar_url);
        localStorage.setItem("user-dob", data.dob);
        localStorage.setItem("user-role", data.role);
        if (data.role == "") {
          setWaitingLogin(false);
          setUserInfo(data);
          dispatchUserInfo(selectUser(userInfor));
          window.location.reload(false);
        } else if (data.role == 1) {
          setWaitingLogin(false);
          history.push("/admin");
        }
      } else alert(status);
    });
  }

  return (
    <>
      {/* side Login */}
      <div className="side-login opacity-0 gradient-bg hidden">
        <div className="inner-wrapper">
          <span
            className="btn-close btn-close-no-padding"
            id="btn_loginNavClose"
          >
            <i />
            <i />
          </span>

          {/*Login / sign up form */}
          <div className="accordion login-signup-form" id="accordionExample">
            <div className="card">
              <div className="card-header" id="login">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#login-form"
                    aria-expanded="true"
                    aria-controls="login-form"
                  >
                    ĐĂNG NHẬP
                  </button>
                </h2>
              </div>
              <div
                id="login-form"
                className="collapse log-in"
                aria-labelledby="login"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <form onSubmit={handleLoginClick}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tên người dùng</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                    {/* <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                    </div> */}
                    <button type="submit" className="btn btn-outline-dark">
                      {waitingLogin && (
                        <div
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                      Đăng nhập
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark close_side_login"
                      id="close0"
                    >
                      Huỷ
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ĐĂNG KÍ
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse sign-up"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tên người dùng</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Đặt mật khẩu
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Nhập lại mật khẩu
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="retypeInputPassword1"
                      />
                    </div>
                    <button type="submit" className="btn btn-outline-dark">
                      Đăng kí
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark "
                      id="close"
                    >
                      Huỷ
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="close_side_login" className="tooltip" />
    </>
  );
};

/* START HEADER NAVIGATION */
const Header = () => {
  const [category, setCategory] = useState({ categories: [] });
  const [searchKey, setSearchKey] = useState();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  useEffect(() => {
    const fetchData = async () => {
      const getCate = await axios("http://localhost:9000/api/category");
      setCategory(getCate.data);
    };

    fetchData();
  }, []);

  return (
    <div className="header-area">
      <div className="container">
        <div className="row upper-nav">
          <div className=" text-left nav-logo">
            <a href="/" className="navbar-brand">
              <img src={require("../static/img/logo.png")} alt="img" />
            </a>
          </div>
          <div className="ml-auto nav-mega d-flex justify-content-end align-items-center">
            <header className="site-header" id="header">
              <nav className="navbar navbar-expand-md  static-nav">
                <div className="container position-relative megamenu-custom">
                  <a
                    className="navbar-brand center-brand"
                    href="index-book-shop.html"
                  >
                    <img
                      src={require("../static/img/logo.png")}
                      alt="logo"
                      className="logo-scrolled"
                    />
                  </a>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          TRANG CHỦ
                        </a>
                      </li>

                      <li className="nav-item dropdown static">
                        <a
                          className="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          THỂ LOẠI SÁCH{" "}
                        </a>
                        <ul className="dropdown-menu megamenu flexable-megamenu">
                          <li>
                            <div className="container">
                              <div className="row">
                                {category.categories.map((cate) => (
                                  <Category category={cate} />
                                ))}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="\">
                          LIÊN HỆ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* Start side menu */}
              <SideMenu />
              <SideLogin />
              {/* End side menu */}
            </header>
            <div className="nav-utility">
              <div className="manage-icons d-inline-block">
                <ul className="d-flex justify-content-center align-items-center">
                  <li className="d-inline-block">
                    <a id="add_search_box" onClick={toggleSearch}>
                      <i className="lni lni-search search-sidebar-hover" />
                    </a>
                  </li>

                  <Avatar></Avatar>
                  <a
                    href="javascript:void(0)"
                    className="d-inline-block sidemenu_btn d-block"
                    id="sidemenu_toggle"
                  >
                    <i className="lni lni-menu" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <Collapse isOpen={isSearchOpen}>
              <Card>
                <form
                  className="app-search d-none d-lg-block"
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                >
                  <div className="position-relative input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm..."
                      aria-describedby="button-addon2"
                      onChange={event =>{setSearchKey(event.target.value)}}
                    />
                    <div className="input-group-append">
                      <a
                        href={`/search?key=${searchKey}`}
                        className="btn"
                        type="button"
                        id="button-addon2"
                      >
                        <span className="bx bx-search-alt" />
                      </a>
                    </div>
                  </div>
                </form>
              </Card>
            </Collapse>
          </div>
        </div>
      </div>
    </div>

    /* END HEADER NAVIGATION */
  );
};
export default Header;
