import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';


const SpaceContext = createContext();

export const useSpaceContext = () => useContext(SpaceContext);

function SpaceProvider({ children }) {

    const [allSpaces, setAllSpaces] = useState(null);

    const getAllSpaces = async () => {
        try {
            console.log("inside try of list")
          const { data } = await axios.post(
            'https://real-red-gosling-hose.cyclic.app/spaces');
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
        setAllSpaces
       };
 return <SpaceContext.Provider value={value}>{children}</SpaceContext.Provider>;

}

export default SpaceProvider
