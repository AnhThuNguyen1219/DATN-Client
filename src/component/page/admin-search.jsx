import React from "react";
import AdminHeader from "../layout/adminheader";
import AdminSideMenu from "../layout/adminsidemenu";

const AdminSearch = () => {
  return (
    <>
      {/* Begin page */}
      <div className="admin" id="layout-wrapper">
        <AdminHeader />
        <AdminSideMenu />

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
                    <h4 className="mb-0 font-size-18">Quản lý sách</h4>
                    <div className="page-title-right">
                    <button type="button" className="btn btn-outline-secondary"><i className="fas fa-plus-circle"></i>Thêm mới sách</button>
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Quản lý sách</a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}

              {/* <BookAdmin /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminSearch;
