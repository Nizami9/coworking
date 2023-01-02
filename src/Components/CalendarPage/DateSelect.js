import React from 'react';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import './styleDateSelect.css';


import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import TimeInput from 'react-time-picker-input';
import "react-time-picker-input/dist/components/TimeInput.css"
import SingleSpace from './SingleSpace';



function DateSelect() {
    const [date, setDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [fromDate, setFromDate] = useState(new Date());
    const [fromTime, setFromTime] = useState("00:00");
    const [toTime, setToTime] = useState("23:00");
    const [btnClasname, setBtnClassname] = useState('continue-btn')
 
    let mockDate=new Date().toDateString();
    
    useEffect(( )=>{
        console.log("d",date)
       // console.log("date 0 and 1   ---",date[0],date[1]);
    },[date])
    const handleChangeCalendar =()=>{
        // {setDate};
        setDate();
        // setFromDate(date[0]);
        // setToDate(date[1]);
    }
    const CalendarComp =
        (
            <div>
                <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} selectRange={true} />
                </div>
                   {/* { date.length > 0  ? (
                    setFromDate(date[1].toDateString()),setToDate(date[2].toDateString()))
                     : ""
                 } */}
                {/* {date.length > 0 ? (
                    <p className="text-center">
                        <span className="bold">Start:</span> {date[0].toDateString()}
                        &nbsp;|&nbsp;
                        <span className="bold">End:</span> {date[1].toDateString()}
                    </p>
                ) : (
                    <p className="text-center">
                        <span className="bold">Default selected date:</span>{" "}
                        {date.toDateString()}
                    </p>
                )} */}

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
        <div>
            <div>
                <Link className='back-link' to='/back'>
                    <img alt='back-arrow-icon' src={require('../../icons/orange-arrow.png')} />
                    <span >Go back</span>
                </Link>
            </div>
            <div className='cal-page-main-grid'>
                <div className='select-date-col'>
                    <div className='inline-flex-comp'>
                        <h4>Select date and time </h4>
                        <h5>Step 1/3 </h5>
                    </div>
                    <div className='calendar'>
                        {CalendarComp}
                    </div>
                    <div className='timer'>
                        {timerComp}
                    </div>
                    <div> <button className={btnClasname}>Continue</button></div>
                </div>
                <div className='space-col'>
                    {
                        console.log(fromDate.toDateString(),toDate.toDateString())
                    }
                    <SingleSpace />
                    <div className='show-date-time'>
                        <div> 
                        <img src={require('../../icons/calendar-icon.png')} alt="calendar-icon" className="calendar-icon" />
                        <span className='show-date'>{mockDate}</span>
                        </div>
                       
                       <div className='show-times'> 
                       <img src={require('../../icons/clock-icon.png')} alt="clock-icon" className="clock-icon" />
                       {fromTime}{" - "}{toTime}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelect
