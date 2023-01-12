import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const BookContext = createContext();

 const useBookContext = () => useContext(BookContext);

function BookProvider({ children }) {

    const [formDetails, setFormDetails] = useState({});
   
    const value = {
        formDetails,
        setFormDetails
       };

       return <BookContext.Provider value={value}>{children}</BookContext.Provider>;

    }
    
    export  { BookProvider, useBookContext }