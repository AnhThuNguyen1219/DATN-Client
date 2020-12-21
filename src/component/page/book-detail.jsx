import React, { useEffect } from 'react';
import Detail from '../layout/detail';
import {useParams} from 'react-router-dom'

const BookDetail = () =>{
    let params = useParams();
    return(
        <div>
        <Detail id={params.bookId}/>
        </div>
    );
}
export default BookDetail;