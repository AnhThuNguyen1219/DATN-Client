import React from 'react';

const CheckAdmin = () =>{
    if(localStorage.getItem("role")!=1) return false;
    else return true;
}