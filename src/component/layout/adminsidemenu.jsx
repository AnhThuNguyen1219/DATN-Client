import { Collapse, Button } from "reactstrap";
import React from "react";
import { useState } from "react";

/* Sidebar */
const AdminSideMenu = () => {
  const [dashboardisOpen, dashboardsetIsOpen] = useState(false);
  const dashboardtoggle = () => dashboardsetIsOpen(!dashboardisOpen);
  const [cateisOpen, catesetIsOpen] = useState(false);
  const catetoggle = () => catesetIsOpen(!cateisOpen);
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
              <a href="/admin" className="waves-effect">
                <i className="bx bx-home-circle" />
                <span className="badge badge-pill badge-info float-right">
                  03
                </span>
                <span>Trang chính</span>
              </a>
            </li>
            <li className="menu-title">Quản lý</li>
            <li>
              <a onClick={catetoggle}  className="has-arrow waves-effect">
                <i className="bx bx-layout" />
                <span>Quản lý danh mục</span>
              </a>
              <Collapse isOpen={cateisOpen}>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="layouts-horizontal.html">Thể loại</a>
                </li>
                <li>
                  <a href="layouts-light-sidebar.html">Tác giả</a>
                </li>
                <li>
                  <a href="layouts-compact-sidebar.html">Nhà xuất bản</a>
                </li>
              </ul>
              </Collapse>
            </li>
            
            <li>
              <a href="/admin/book" className=" waves-effect">
              <i className="fas fa-book"/>
                <span>Quản lý sách</span>
              </a>
            </li>
            <li>
              <a href="javascript: void(0);" className="waves-effect">
                <i className="fas fa-user-friends"></i>
                <span>Quản lý người dùng</span>
              </a>
            </li>
            <li>
              <a href="javascript: void(0);" className="waves-effect">
              <i className="far fa-file-alt"></i>
                <span>Quản lý đề xuất</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
  );
};
export default AdminSideMenu;