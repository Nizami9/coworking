import React from 'react';
import { useState} from "react";
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
    const [btnClasname, setBtnClassname] = useState('continue-btn');


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
                    <div> <button className={btnClasname}><Link to='/community'>Continue</Link></button></div>
                </div>
                <div className='space-col'>
                    <SingleSpace />
                    <div className='show-date-time'>
                        <div> 
                        <img src={require('../../icons/calendar-icon.png')} alt="calendar-icon" className="calendar-icon" />
                        <span className='show-date'>{fromDate.toDateString()}{" - "}{toDate.toDateString()}</span>
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
