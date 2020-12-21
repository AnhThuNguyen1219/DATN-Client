import React, { useEffect } from "react";
import AdminHeader from "../layout/adminheader";
import AdminSideMenu from "../layout/adminsidemenu";
import { CardBook } from "../layout/list_book";
import axios from "axios";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";

const AdminSideFilter = () => {
  const [category, setCategory] = useState({ categories: [] });
  const [isCateOpen, setIsCateOpen] = useState(false);

  const toggleCate = () => setIsCateOpen(!isCateOpen);
  useEffect(() => {
    const fetchData = async () => {
      const getCate = await axios("http://localhost:9000/api/category");
      setCategory(getCate.data);
    };

    fetchData();
  }, []);

  return (
    <div class="col-lg-3">
      <a href ="/admin/book/add"type="button" style={{marginBottom:"10px"}} className="btn btn-info"><i className="fas fa-plus-circle"></i>{" "}Thêm mới sách</a>
      <br/>
      <div class="card">
        <div class="card-body">
        <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title"><p className="font-size-16">Xem theo:</p></li>

            <li style={{borderTop:"1px solid rgb(0,0,0,0.1)"}}>
              
              <a className="col">
                <div className="row">
                  <span class="font-size-20 col-9">Tác giả</span>
                  <i className="fas fa-chevron-down col-3"></i>
                </div>
                
              </a>
              
            </li>
            <li style={{borderTop:"1px solid rgb(0,0,0,0.1)"}}>
            <a onClick={toggleCate} className="col">
            <div className="row">
                  <span class="font-size-20 col-9">Thể loại</span>
                  <i className="fas fa-chevron-down col-3"></i>
                </div>
            </a>
            <Collapse isOpen={isCateOpen}>
              <Card>
                <CardBody>
                  <ul>
                  {category.categories.map((cate) => (
                    <li>
                      <a className="font-size-20" style={{color:'#545a6d'}} href={`/admin/book/category/${cate.id}`}>{cate.name} </a>
                    </li>
                ))}
                  </ul>
                </CardBody>
              </Card>
            </Collapse>
            </li>
            <li style={{borderTop:"1px solid rgb(0,0,0,0.1)"}}>
              <a className="col">
                <div className="row">
                  <span class="font-size-20 col-9">Tác giả</span>
                  <i className="fas fa-chevron-down col-3"></i>
                </div>
                
              </a>
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
};
const AdminBookResult = (props) => {
  return (
    <>
      <div class="col-lg-9">
        {/* {props.books.map((book) => (
          <>
            <CardBook
              Id={book.id}
              Cover={book.cover}
              Title={book.title}
            ></CardBook>
          </>
        ))} */}
      </div>
    </>
  );
};

const AdminBook = () => {
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
                    
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="/admin/book">Quản lý sách</a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
              
                <AdminSideFilter />
                <AdminBookResult />
              </div>
              {/* <BookAdmin /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBook;
