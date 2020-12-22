import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import { updateReviewBook } from "../../service/DataService";
const ReviewDetail = () => {
  let params = useParams();
  let history = useHistory()
  let reviewId = params.reviewId;


  const [bookId, setBookId] = useState();
  const [bookTitle, setBookTitle] = useState();
  const [bookCover, setBookCover] = useState();
  const [rating, setRating] = useState();
  const [title, setTitle] = useState();
  const [review, setReview] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const getRev = await axios(
        "http://localhost:9000/api/review/" + reviewId
      );
      setBookId(getRev.data.book_id);
      setBookTitle(getRev.data.book_title);
      setBookCover(getRev.data.book_cover);
      setRating(getRev.data.rating);
      setReview(getRev.data.review);
      setTitle(getRev.data.title)
    };

    fetchData();
  }, []);

  const handlePutReview = (event) => {
    event.preventDefault();
    updateReviewBook(reviewId,rating, title, review).then(
      (status) => {
        if (status == 200) {
          alert("Thành công!");
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
  };

  return (
    <>
      <section id="slider-sec2" className="slider-sec2 parallax"></section>
      <div className="container">
        <br />
        <h5>Chỉnh sửa đánh giá</h5>
        <div className="row">
        <div className="col-3">
            <img style={{marginTop:"10px"}} src={bookCover}></img>
            <p>{bookTitle}</p>
        </div>
        <div className="col">
        <div>
      <form>
        <div className="form-group ">
          <label htmlFor="formControlRange">
            Bạn cảm nhận như thế nào về cuốn sách này?
          </label>

          <input
            type="range"
            className="form-control-range col-6"
            id="formControlRange"
            min="0"
            max="100"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <label htmlFor="formControlRange">
            Thích cuốn sách này {rating} <i className="lni lni-heart-filled" style={{color:"#f03b3b"}}></i>
          </label>
        </div>
      </form>
      <p>Viết cảm nhận của bạn vào đây nha</p>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Tiêu đề
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Tiêu đề"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <ReactQuill theme="snow" value={review} onChange={setReview} />
      <div className="row col-12 reviewSubmit">
        <div className="col"></div>
        <button
          type="button"
          className="btn col-4"
          style={{ backgroundColor: "#ffc107", color: "#fff" }}
          onClick={handlePutReview}
        >
          Đăng
        </button>
        <button
          type="button"
          className="btn btn-dark col-4"
          
          onClick={() => history.goBack()}
        >
          Huỷ bỏ
        </button>
      </div>
    </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDetail;
