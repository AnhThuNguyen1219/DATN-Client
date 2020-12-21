import React, { useState } from 'react';
import axios from "axios";
const login = (username, password)=>{
    return axios
    .post("http://localhost:9000/auth/login", {
      username: username,
      password: password,
    })
    .then(function (response) {
      
      const token = response.data.accessToken;
      return [response.status, response.data]
    })
    .catch(function (error) {
        let status = error.response.status
        return [status, null];
    });
}
export default login;