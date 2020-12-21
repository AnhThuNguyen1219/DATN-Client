import { Collapse, Button } from "reactstrap";
import React from "react";
import { useState } from "react";
import AdminHeader from "../layout/adminheader";
import AdminSideMenu from "../layout/adminsidemenu";

/* Sidebar */


const Admin = () => {
  return (
    <>
      {/* Begin page */}
      <div className="admin" id="layout-wrapper">
        <AdminHeader/>
        <AdminSideMenu/>

        {/* ============================================================== */}
        {/* Start right Content here */}
        {/* ============================================================== */}
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Dashboard</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Dashboards</a>
                        </li>
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
              <div className="col-6">
                  <div className="card overflow-hidden">
                    <div className="bg-soft-primary">
                      <div className="row">
                        <div className="col-7">
                          <div className="text-primary p-3">
                            <h5 className="text-primary">Mừng trở lại !</h5>
                            
                          </div>
                        </div>
                        <div className="col-5 align-self-end">
                          <img
                            src="https://res.cloudinary.com/anhthu1219/image/upload/v1608456104/book_cover/profile-img_xhgypc.png"
                            alt
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="avatar-md profile-user-wid mb-4">
                            <img
                              src={localStorage.getItem("user-ava")}
                              alt
                              className="img-thumbnail rounded-circle"
                            />
                          </div>
                          <h5 className="font-size-15 text-truncate">
                            {localStorage.getItem("user-name")}
                          </h5>
                          <p className="text-muted mb-0 text-truncate">
                            Quản trị viên
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                
                <div className="col">
                  <div className="row">
                  <div className="col">
                  <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số người dùng
                              </p>
                              <h4 className="mb-0">1,235</h4>
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="bx bx-copy-alt font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số sách
                              </p>
                              <h4 className="mb-0">1,235</h4>
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="bx bx-copy-alt font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số tác giả
                              </p>
                              <h4 className="mb-0">$35, 723</h4>
                            </div>
                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-archive-in font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số nhà xuất bản
                              </p>
                              <h4 className="mb-0">$16.2</h4>
                            </div>
                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-purchase-tag-alt font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số sách
                              </p>
                              <h4 className="mb-0">1,235</h4>
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="bx bx-copy-alt font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số tác giả
                              </p>
                              <h4 className="mb-0">$35, 723</h4>
                            </div>
                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-archive-in font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mini-stats-wid">
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">
                                Tổng số nhà xuất bản
                              </p>
                              <h4 className="mb-0">$16.2</h4>
                            </div>
                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-purchase-tag-alt font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */} 
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
        
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">© Skote.</div>
                <div className="col-sm-6">
                  <div className="text-sm-right d-none d-sm-block">
                    Liên hệ <a href="fb.com/anhthu1219">Nguyễn Thị Anh Thư</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* end main content*/}
      </div>
      {/* END layout-wrapper */}
      {/* Right Sidebar */}
      <div className="right-bar">
        <div data-simplebar className="h-100">
          <div className="rightbar-title px-3 py-4">
            <a
              href="javascript:void(0);"
              className="right-bar-toggle float-right"
            >
              <i className="mdi mdi-close noti-icon" />
            </a>
            <h5 className="m-0">Settings</h5>
          </div>
          {/* Settings */}
          <hr className="mt-0" />
          <h6 className="text-center mb-0">Choose Layouts</h6>
          
        </div>{" "}
        {/* end slimscroll-menu*/}
      </div>
      {/* /Right-bar */}
      {/* Right bar overlay*/}
      <div className="rightbar-overlay" />
    </>
  );
};

export default Admin;
