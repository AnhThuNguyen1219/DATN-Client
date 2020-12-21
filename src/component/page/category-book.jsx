import React from "react";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ListBooks, { CardBook } from "../layout/list_book";
import axios from "axios";

const Category = (props) => {
  return <></>;
};

const SideCategory = (props) => {
  const [category, setCategory] = useState({ categories: [] });
  useEffect(() => {
    const fetchData = async () => {
      const getCate = await axios("http://localhost:9000/api/category");
      setCategory(getCate.data);
    };

    fetchData();
  }, []);
  return (
    <>
      {/* START STICKY NAV */}
      <div className=" col-lg-4 order-2 order-lg-1 sticky">
        <div id="product-filter-nav" className="product-filter-nav mb-3">
          <div className="product-category">
            <h4 className="filter-heading  text-center text-lg-left">
              Thể loại
            </h4>
            <ul>
              {category.categories.map(cate=>(
                <li>
                <a href={`/category/${cate.id}`}>{cate.name} </a>
              </li>
              ))}
            </ul>
          </div>
          <button className="btn yellow-color-green-gradient-btn mt-1">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

const BookCategory = (props) => {
  let params = useParams();
  let category_id=params.categoryId
  const [isLoading, setIsLoading] = useState(false)
  const [categoryName, setCategoryName] = useState("");
  const [categoryBook, setCategoryBook] = useState({ books: [] });
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      var url ="http://localhost:9000/api/category/"+category_id
      console.log(url)
      const cate = await axios(url);
      if(cate.status==200){
      setCategoryName(cate.data.category_name);
      setCategoryBook(cate.data);
      setIsLoading(false)
      }    
      else{
        setIsLoading(true)
        console.log("Something wrong!")
      }
};

    fetchData();
  }, []);
  return (
    <>
      <section id="slider-sec" className="slider-sec parallax"></section>
      <div className="product-listing">
        <div className="container">
          <div className="row no-gutters">
            <SideCategory />
            {/* START PRODUCT COL 8 */}
            <div className="col-md-12 col-lg-8 order-1 order-lg-2">
              <div className="row">
                {/* START LISTING HEADING */}
                <div className="col-12 product-listing-heading">
                  <h1 className="heading text-left">{categoryName}</h1>
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
              </div>
            </div>
            {/* END PRODUCT COL 8 */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookCategory;
