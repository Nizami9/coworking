import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';


const SpaceContext = createContext();

 const useSpaceContext = () => useContext(SpaceContext);

function SpaceProvider({ children }) {

    const [allSpaces, setAllSpaces] = useState([]);
    const [selectedSpace,setSelectedSpace]=useState();
    const [toDate, setToDate] = useState(new Date());
    const [fromDate, setFromDate] = useState(new Date());
    const [fromTime, setFromTime] = useState("00:00");
    const [toTime, setToTime] = useState("23:00");
    // const [selectedDate,setSelectedDate]=useState({
    //   from:new Date(),
    //   to:new Date()
    // });

    const REACT_APP_API_BACKEND=process.env.REACT_APP_API_BACKEND;

    const getAllSpaces = async() => {
        try {
          const { data } = await axios.get(
            //'http://localhost:3100/spaces');
           `{REACT_APP_API_BACKEND}/spaces`);
            setAllSpaces(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
       getAllSpaces();
      }, []);

      const value = {
        allSpaces,
        setAllSpaces,
        selectedSpace,
        setSelectedSpace,
        toDate,
        setToDate,
        fromDate,
        setFromDate,
        toTime,
        setToTime,
        fromTime,
        setFromTime
        
       };
 return <SpaceContext.Provider value={value}>{children}</SpaceContext.Provider>;

}

export  { SpaceProvider, useSpaceContext }
