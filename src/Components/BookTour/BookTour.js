import React from 'react';
import BookTourLeft from './BookTourLeft.js';
import BookTourRight from "./BookTourRight";
import "./BookTour.css";

const BookTour = () => {
  return (
    <div className='BookTourContainer'>
    <BookTourRight />
    <BookTourLeft />
    </div>
  )
}

export default BookTour
