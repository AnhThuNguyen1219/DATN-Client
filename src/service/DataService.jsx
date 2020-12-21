import React, { useState } from "react";
import axios from "axios";
const addFavourBook = async (userID, bookID) => {
  var token = localStorage.getItem("accessToken");

  return await axios({
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",

      Authorization: `Bearer ${token}`,
    },
    url: "http://localhost:9000/api/favourite",
    data: {
      user_id: userID,
      book_id: "" + bookID,
    },
  })
    .then(function (response) {
      return response.status;
    })
    .catch(function (error) {
      let status = error.response;
      return status;
    });
};

const addReviewBook = async (userID, bookID, rating, title, rate_review) => {
  var token = localStorage.getItem("accessToken");
  var time = Date.now();

  return await axios({
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",

      Authorization: `Bearer ${token}`,
    },
    url: "http://localhost:9000/api/review",
    data: {
      user_id: userID,
      book_id: "" + bookID,
      rating: "" + rating,
      title: title,
      rate_review: rate_review,
      time: "" + time.toLocaleString("vi-VN"),
    },
  })
    .then(function (response) {
      return response.status;
    })
    .catch(function (error) {
      let status = error.response.status;
      return status;
    });
};

const getCoverURL =(cover) => {
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/anhthu1219/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "fmqsdzli";
  const formData = new FormData();
  formData.append("file", cover);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  return axios({
    headers:{
      'Content-Type':'multipart/form-data'
    },
    method: "post",
    url: CLOUDINARY_URL,
    data: formData,
  })
    .then((response) => {
      if (response.data.url !== "") {
        return response.data.url;
      }
    })
    .catch((err) => {
      return null;
    });
};

const addNewBook = async (
  title,
  author_id,
  publisher_id,
  description,
  cover,
  cate
) => {
  var token = localStorage.getItem("accessToken");
  var cover_url =await getCoverURL(cover);
  
  
  const headers = {
    "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  const data ={
    title: title,
    description: "" + description,
    publisherId: ""+publisher_id,
    cover: "" + cover_url,
    authorId: ""+ author_id,
    category:cate 
  }
  
  return await axios.post("http://localhost:9000/api/book",data,{
    headers: headers
  })
    .then(function (response) {
      console.log(response.data)
      return response.status;
    })
    .catch(function (error) {
      let status = error.response.status;
      console.log(status)
      return status;
    });
};
export { addFavourBook, addReviewBook, addNewBook };
