import React from "react";
import {
  Link
} from "react-router-dom";



const CardBook = (props) => {
  return (
    <>
      <figure className="gallery-grid__item category-concept">
      <Link to={`/book/${props.Id}`}>
        <div className="gallery-grid__image-wrap">
        
          <img
            className="gallery-grid__image cover lazyload"
            src={props.Cover}
            data-zoom
            alt
          />
          
        </div>
        </Link>
        <figcaption className="gallery-grid__caption">
          <div className="row">
          <Link to={`/book/${props.Id}`}className="col-8">
            <h4 className="title title--h6 gallery-grid__title ">
              {props.Title}
            </h4>
            </Link>

            <div className="title title--h6 gallery-grid__title col-4">
              <i className="lni lni-heart"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="verticalLine"></div>
    </>
  );
};

const ListBooks = (props) => {
  return (
    <div className="container list-book">
      <div className="row">
      <h2 className="col-8">{props.header}</h2> 
      <a href={`/category/${props.category_id}`} className="col seemore">Xem thêm{" "} <i className="lni lni-angle-double-right"></i></a>
      </div>
      
      <hr />
      <div className="row book">
        {/* {props.books.map(item => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))} */}
          {props.books.books.slice(0,5).map(data => (
          <CardBook
          Id={data.id}
          Cover={data.cover}
          Title={data.title}
        ></CardBook>
        ))}
        
      </div>
    </div>
  );
};
export default ListBooks;
export  {CardBook};
