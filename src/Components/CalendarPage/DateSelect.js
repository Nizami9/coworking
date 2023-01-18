import React from 'react';
import { useState,useEffect} from "react";
import { Link,useParams,useNavigate } from 'react-router-dom';
import './styleDateSelect.css';


import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import TimeInput from 'react-time-picker-input';
import "react-time-picker-input/dist/components/TimeInput.css"
import SingleSpace from './SingleSpace';
import { useSpaceContext } from '../../context/SpaceContext';


function DateSelect() {
    const [date, setDate] = useState(new Date());
    const {setFromDate,setToDate,setFromTime,setToTime,fromDate,toDate,fromTime,toTime} =useSpaceContext();
    const[fromD,setFromD]=useState();
    const[toD,setToD]=useState();

    const [btnClasname, setBtnClassname] = useState('continue-btn');
    const navigate = useNavigate();
    
    const {id} = useParams();

    const handleChangeCalendar =(e)=>{
         setDate(e);
         console.log(e); 
        //  setFromD(e[0]);
        //  setToD(e[1]);
         setFromDate(e[0]);
         setToDate(e[1]);
    }

   
    // useEffect(()=>{
    //     setFromDate(fromD.toDateString());
    //     setToDate(toD.toDateString());
    //     console.log("inside effect ")
    // },[fromD,toD])
    
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
        <div>
            <div>
                <Link className='back-link' onClick={() => navigate(-1)} >
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
                    <div> <button className={btnClasname}><Link to='/enter-details'>Continue</Link></button></div>
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
