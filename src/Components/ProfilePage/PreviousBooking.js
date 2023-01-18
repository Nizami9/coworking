import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


import { useSpaceContext } from '../../context/SpaceContext';

function PreviousBooking() {

   const { allSpaces } = useSpaceContext();
   const userid=localStorage.getItem('userId');
   const backEnd_API=process.env.REACT_APP_API_BACKEND;
   const[prevBooks,setPrevBooks]=useState();
   let bookedSpace;

   //const spaces = allSpaces.filter(space => space.city.toLowerCase().includes(searchKey)||(space.address.toLowerCase()).includes(searchKey));
   const getPrevBookings =async () =>{
    try {
     //  const { data } = await axios.post(`${backEnd_API}/booking/prev-bookings`,{
       const { data } = await axios.post('http://localhost:3100/booking/prev-bookings',{
           userid:userid
       } );
      setPrevBooks(data)
     console.log("Success",data);
     }catch(err){
       console.log(err);
     }
}



useEffect(()=>{
    getPrevBookings();
},[]);


  return (
    <div>
          {prevBooks &&
        prevBooks.map((booking) => {
            { 
                console.log(prevBooks , allSpaces)
                 bookedSpace = allSpaces.filter(space => space.spaceid === booking.spaceid);
                 console.log("booked space",bookedSpace)
           }
          return (   
            <div className="card" key={booking.id}>
                {" "}
             
                <img src={bookedSpace.imgurl} alt="img" className="img" />
              <div className="list-wrapper">
                <div className="title">
                <div className='checkBoxTitle'>{bookedSpace.title}</div>
                  <div className="address-city-country">
                    <div className="address"> {bookedSpace.address}</div>
                    <div className="city"> {bookedSpace.city} </div>
                    <div className="country"> {bookedSpace.counrty} </div>
                    {/* <div><Link className="spacesLink" to={`/space/${space.id}`}>Explore space →</Link></div> */}
                    <div className="area-maxPeople-costperDay">
                    {/* <div className="area"> {space.area}</div>
                    <div className="maxpeople"> {space.maxPeople} </div> */}
                    <div className="costperDay"> {bookedSpace.costperday}</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
               )})}
      

    </div>
  )
}

export default PreviousBooking
