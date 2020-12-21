import { Multiselect } from "multiselect-react-dropdown";
import React from "react";
import { useState } from "react";
import AdminHeader from "../layout/adminheader";
import AdminSideMenu from "../layout/adminsidemenu";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import { addNewBook, getCoverURL } from "../../service/DataService";
/* Sidebar */

const AdminAddBook = () => {
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
                    <h4 className="mb-0 font-size-18">Thêm mới sách</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Quản lý sách</a>
                        </li>
                        <li className="breadcrumb-item active">Thêm mới</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <AddForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddForm = () => {
  const [category, setCategory] = useState({ categories: [] });
  const [publisher, setPublisher] = useState({ publisher: [] });
  const [author, setAuthor] = useState({ author: [] });

  //select part
  const [booktitle, setbooktitle] = useState();
  const [bookcate, setbookcate] = useState();
  const [bookpub, setBookpub] = useState();
  const [bookau, setBookau] = useState();
  const [bookdes, setBookdes] = useState();
  const [cover, setCover] = useState();

  const [waiting, setWaiting] = useState(false);
  const cateref = useRef();
  const auref = useRef();
  const pubref = useRef();

  function getCateValue() {
    setbookcate(cateref.current.getSelectedItems());
  }
  function getPubValue() {
    setBookpub(pubref.current.getSelectedItems());
  }
  function getAuValue() {
    setBookau(auref.current.getSelectedItems());
  }

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setCover(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleUploadBook = () => {
    setWaiting(true)
    if (
      booktitle != null &&
      bookau[0].id != null &&
      bookpub[0].id != null &&
      bookcate != null &&
      bookdes != null &&
      cover != null
    ) {
      addNewBook(booktitle, bookau[0].id, bookpub[0].id, bookdes, cover, bookcate).then(status=>{
        if (status==200){
          alert("Thêm mới thành công");
          setWaiting(false)
          window.location.reload(false);
        }
        else if (status==422){
          alert("Cuốn sách này đã có trong hệ thống. Xin mời nhập lại.")
          setWaiting(false)
        }
      });
    } else {
      setWaiting(false)
      alert("Bạn chưa nhập đầy đủ thông tin!")
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const getCate = await axios("http://localhost:9000/api/category");
      setCategory(getCate.data);
      const getPub = await axios("http://localhost:9000/api/publisher");
      setPublisher(getPub.data);
      const getAu = await axios("http://localhost:9000/api/author");
      setAuthor(getAu.data);
    };

    fetchData();
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Thông tin cơ bản</h4>
            <p className="card-title-desc">
              Điền đầy đủ thông tin vào các mục dưới đây!
            </p>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="title">Tên cuốn sách</label>
                    <input
                      required
                      id="title"
                      name="title"
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        setbooktitle(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Tác giả</label>
                    <Multiselect
                      options={author.author} // Options to display in the dropdown
                      //   selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                      //   onSelect={this.onSelect} // Function will trigger on select event
                      //   onRemove={this.onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      placeholder="Chọn..."
                      selectionLimit="1"
                      ref={auref}
                      onSelect={getAuValue}
                      onRemove={getAuValue}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="publisher">Nhà xuất bản</label>
                    <Multiselect
                      options={publisher.publisher} // Options to display in the dropdown
                      //   selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                      //   onSelect={this.onSelect} // Function will trigger on select event
                      //   onRemove={this.onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      placeholder="Chọn..."
                      selectionLimit="1"
                      ref={pubref}
                      onSelect={getPubValue}
                      onRemove={getPubValue}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Thể loại</label>
                    <Multiselect
                      options={category.categories} // Options to display in the dropdown
                      //   selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                      //   onSelect={this.onSelect} // Function will trigger on select event
                      //   onRemove={this.onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                      placeholder="Chọn..."
                      ref={cateref}
                      onSelect={getCateValue}
                      onRemove={getCateValue}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productdesc">Mô tả sơ lược</label>
                    <textarea
                      required
                      className="form-control"
                      id="productdesc"
                      rows={5}
                      defaultValue={""}
                      onChange={(event) => {
                        setBookdes(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="publisher">Bìa sách</label>
                    <form action="/" method="post" className="dropzone">
                      <div className="fallback">
                        <input
                          name="file"
                          type="file"
                          onChange={handleImageUpload}
                        />
                      </div>
                      <img src={cover} />
                      
                    </form>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary mr-1 waves-effect waves-light"
                onClick={handleUploadBook}
              >
                {waiting && (
                        <div
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                Thêm mới
              </button>

              <button type="button" className="btn btn-secondary waves-effect">
                Huỷ bỏ
              </button>
            </form>
          </div>
        </div>
        {/* end card*/}
      </div>
    </div>
  );
};
export default AdminAddBook;
