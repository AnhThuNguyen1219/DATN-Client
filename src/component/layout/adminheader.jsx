import { Collapse, Button } from "reactstrap";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminHeader = () => {
  const id = localStorage.getItem("user-id");
  const name = localStorage.getItem("user-name");
  const ava = localStorage.getItem("user-ava");
  const dob = localStorage.getItem("user-dob");
  const history = useHistory();
  function handleLogout(event) {
    event.preventDefault();
    localStorage.clear();
    history.push("/")
    window.location.reload(false);
  }
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="/admin" className="logo logo-dark">
              <span className="logo-lg">
                <img src={require("../static/img/logo.png")} alt height={17} />
              </span>
              
            </a>
            <a href="/admin" className="logo logo-light">
              <span className="logo-lg">
                <img src={require("../static/img/logo.png")} alt height={19} />
              </span>
              
            </a>
          </div>
          <div className="d-flex" style={{margin:"auto"}}>
          TRANG QUẢN LÝ
            </div>
          
          {/* App Search*/}
          <form className="app-search d-none d-lg-block" style={{marginLeft: "20px"}}>
            <div className="position-relative" >
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm..."
              />
              <span className="bx bx-search-alt" />
            </div>
          </form>
        </div>
        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ml-2">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="mdi mdi-magnify" />
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-notifications-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-bell bx-tada" />
              <span className="badge badge-danger badge-pill">3</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0"> Thông báo </h6>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="small">
                      {" "}
                      Xem tất cả
                    </a>
                  </div>
                </div>
              </div>
              <div data-simplebar style={{ maxHeight: 230 }}>
                <a href className="text-reset notification-item">
                  <div className="media">
                    <div className="avatar-xs mr-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-16">
                        <i className="bx bx-cart" />
                      </span>
                    </div>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Your order is placed</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="media">
                    <img
                      src="assets\images\users\avatar-3.jpg"
                      className="mr-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">James Lemire</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          It will seem like simplified English.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="media">
                    <div className="avatar-xs mr-3">
                      <span className="avatar-title bg-success rounded-circle font-size-16">
                        <i className="bx bx-badge-check" />
                      </span>
                    </div>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Your item is shipped</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href className="text-reset notification-item">
                  <div className="media">
                    <img
                      src="assets\images\users\avatar-4.jpg"
                      className="mr-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Salena Layfield</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline" /> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-2 border-top">
                <a
                  className="btn btn-sm btn-link font-size-14 btn-block text-center"
                  href="javascript:void(0)"
                >
                  <i className="mdi mdi-arrow-right-circle mr-1" /> View More..
                </a>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src={ava}
                alt={name}
              />
              <span className="d-none d-xl-inline-block ml-1">{name}</span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              {/* item*/}
              <a className="dropdown-item" href="#">
                <i className="bx bx-user font-size-16 align-middle mr-1" />{" "}
                {name}
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item text-danger" onClick={handleLogout}>
                <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger" />{" "}
                Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AdminHeader;