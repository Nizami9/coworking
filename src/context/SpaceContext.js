import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';


const SpaceContext = createContext();

export const useSpaceContext = () => useContext(SpaceContext);

function SpaceProvider({ children }) {

    const [allSpaces, setAllSpaces] = useState(null);

    const getAllSpaces = async () => {
        try {
          const { data } = await axios.post(
            'http://localhost:3100/spaces');
            setAllSpaces(data);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
       getAllSpaces();
      }, []);

 return <SpaceContext.Provider value={allSpaces}>{children}</SpaceContext.Provider>;

}

export default SpaceProvider
