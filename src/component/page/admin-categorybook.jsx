import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import AdminHeader from "../layout/adminheader";
import AdminSideMenu from "../layout/adminsidemenu";
import axios from "axios";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { delABook } from "../../service/DataService";


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

            {/* <li style={{borderTop:"1px solid rgb(0,0,0,0.1)"}}>
              
              <a className="col">
                <div className="row">
                  <span class="font-size-20 col-9">Tác giả</span>
                  <i className="fas fa-chevron-down col-3"></i>
                </div>
                
              </a>
              
            </li> */}
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
            {/* <li style={{borderTop:"1px solid rgb(0,0,0,0.1)"}}>
              <a className="col">
                <div className="row">
                  <span class="font-size-20 col-9">Tác giả</span>
                  <i className="fas fa-chevron-down col-3"></i>
                </div>
                
              </a>
            </li> */}
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
        <BookCategory/>
      </div>
    </>
  );
};

const AdminCategoryBook = () => {
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

const BookCategory = (props) => {
  let params = useParams();
  let category_id = params.categoryId;
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryBook, setCategoryBook] = useState({ books: [] });
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      var url = "http://localhost:9000/api/category/" + category_id;
      console.log(url);
      const cate = await axios(url);
      if (cate.status == 200) {
        setCategoryName(cate.data.category_name);
        setCategoryBook(cate.data);
        setIsLoading(false);
      } else {
        setIsLoading(true);
        console.log("Something wrong!");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {/* START LISTING HEADING */}
      <div className="col-12 product-listing-heading" style={{paddingTop: "0px"}}>
        <h4 className="heading text-left"style={{marginBottom:"5px"}}>Danh mục: {categoryName}</h4>
        {/* <p className="para_text text-left">
                    {props.categoryDefine}
                  </p> */}
      </div>
      {/* END LISTING HEADING */}
      {/* START PRODUCT LISTING SECTION */}
      <div className="col-12 product-listing-products row book">
        {/* START DISPLAY PRODUCT */}

        {categoryBook.books.map((book) => (
          <>
            <CardBook
              Id={book.id}
              Cover={book.cover}
              Title={book.title}
            ></CardBook>
          </>
        ))}
        {/* END DISPLAY PRODUCT */}
      </div>
      {/* END PRODUCT LISTING SECTION */}
    </>
  );
};
const CardBook = (props) => {
    const history=useHistory()
    const handleDelBook = () =>{
        delABook(props.Id).then(
            (status) => {
              if (status == 200) {
                alert("Đã xoá");
                window.location.reload();
                history.goBack()
              } else if (status == 500) {
                alert("Không thể thay đổi đánh giá cuốn sách ngay lúc này!");
                window.location.reload();
              } else {
                alert(status);
                console.log(status);
              }
            }
          );
    }
    return (
      <>
        <figure className="gallery-grid__item category-concept">
        <div>
          <div className="gallery-grid__image-wrap">
          
            <img
              className="gallery-grid__image cover lazyload"
              src={props.Cover}
              data-zoom
              alt
            />
            
          </div>
          </div>
          <figcaption className="gallery-grid__caption">
            <div className="row">
            <div className="col-8">
              <h4 className="title title--h6 gallery-grid__title ">
                {props.Title}
              </h4>
              </div>
  
              <a className="title title--h6 gallery-grid__title col-4" onClick={handleDelBook}>
              <i className="far fa-trash-alt"></i>
              </a>
            </div>
          </figcaption>
        </figure>
        <div className="verticalLine"></div>
      </>
    );
  };
export default AdminCategoryBook;
