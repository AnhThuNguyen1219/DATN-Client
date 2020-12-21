import React from "react";
import { useState, useEffect } from "react";

import ListBooks, { CardBook } from "../layout/list_book";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchBook = (props) => {
    const location = new URLSearchParams(useLocation().search)
  const key = location.get("key")
  console.log(location)
  const [isLoading, setIsLoading] = useState(false)
    const [book, setBook] = useState({ books: [] });
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      var url ="http://localhost:9000/api/book?key="+key
      console.log(url)
      const cate = await axios(url);
      if(cate.status==200){
      setBook(cate.data);
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
            {/* START PRODUCT COL 8 */}
            <div className="col-md-12 col-lg-8 order-1 order-lg-2">
              <div className="row">
                {/* START LISTING HEADING */}
                <div className="col-12 product-listing-heading">
                  <h1 className="heading text-left">Tìm kiếm với từ khoá: {key}</h1>
                  {/* <p className="para_text text-left">
                    {props.categoryDefine}
                  </p> */}
                </div>
                {/* END LISTING HEADING */}
                {/* START PRODUCT LISTING SECTION */}
                
                  {/* START DISPLAY PRODUCT */}
                  {(book.books!=null) ? (<>
                    <div className="col-12 product-listing-products row book">
                    {book.books.map((book) => (
                    
                    <>
                      <CardBook
                        Id={book.id}
                        Cover={book.cover}
                        Title={book.title}
                      ></CardBook>
                      
                    </>
                  ))}
                  </div>
                  </>)
                  :
                   (<>
                    <h4>Không có cuốn sách nào tương ứng với từ khoá tìm kiếm.</h4>
                  </>)
                  }
                  
                  
                  {/* END DISPLAY PRODUCT */}
                
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
export default SearchBook;
