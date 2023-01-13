import React from "react";
import { useState } from "react";
import { useSpaceContext } from '../../context/SpaceContext';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import "./BookTour.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import TimeInput from 'react-time-picker-input';
import "react-time-picker-input/dist/components/TimeInput.css";

function BookTourLeft() {
  const {setFromDate,setToDate,setFromTime,setToTime} =useSpaceContext();
  const {fromTime,toTime,selectedSpace}= useSpaceContext();
  const [date, setDate] = useState(new Date());

  const handleChangeCalendar =(e)=>{
    setDate(e);
    console.log(e); 
    setFromDate(e[0]);
    setToDate(e[1]);
}

  const CalendarComp =
  (
      <div>
          <div className="calendar-container">
              <Calendar onChange={(e)=>handleChangeCalendar(e)} value={date} selectRange={true} />
          </div>
      </div>
  );

  const timerComp = (
    <div>
        <div className='timer-div'>
            <div className='time-div' >
                <div className='show-time'>Start at  </div>
                <div className='timer'>
                    <TimeInput
                        fullTimeDropdown='true'
                        onChange={(newValue) => { setFromTime(newValue) }}
                        value={fromTime} />
                </div>
            </div>
            <div className='time-div' >
                <div className='show-time'>End at  </div>
                <div className='timer'>
                    <TimeInput
                        fullTimeDropdown='true'
                        onChange={(newValue) => { setToTime(newValue) }}
                        value={toTime} />
                </div>
            </div>
        </div>
    </div>
);
  return (
    <div className="bookTourLeftContainer">
    <ScrollToTopOnMount />
      <div className="bookTourLeftTitle">
        <h2>Book A Tour</h2>
      </div>
      <div className="bookTourLeftCont">
        {selectedSpace && 
        (
        <>
          <div>
            <hr />
            <div className="bookTourLeftDetails" key={selectedSpace.id}>
            <div className='calendar'>
            {CalendarComp}
          </div>
          <div className='timer'>
              {timerComp}
          </div>
              <div className="bookTourLeftDetailsInfo">
                <div className="bookTourLeftSpaceTitle">
                  <h4> {selectedSpace.title}</h4>
                </div>
                <div className="bookTourLeftLocation">
                  <img
                    src={require("../../icons/location-icon.png")}
                    alt="location-icon"
                    className="bookTourLeftLocationIcon"
                  />
                </div>
            </div>
          </div>
      </div> 
      <div className="imageContainer">
        <img src={selectedSpace.imgUrl} alt="img"  className="bookTourLeftImg"/>
        <h3>{selectedSpace.city}</h3>
      </div>
    </>
      )}
    </div>

    </div> 
  ); 
}

export default BookTourLeft;
