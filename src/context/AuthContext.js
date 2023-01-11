import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';


const AuthContext = createContext();


export const useAuthContext = () => useContext(AuthContext);


const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
  
    const verifyToken = async () => {
        console.log("token from ls is",token)
      try {
        const { data } = await axios.post(
          'https://real-red-gosling-hose.cyclic.app/user/auth',
          {},
          { headers: { Authorization: token } }
        );
        setIsAuthenticated(true);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      token && verifyToken();
    }, [token]);
  
    const value = {
      setToken,
      isAuthenticated,
      setIsAuthenticated,
      user,
      setUser,
     };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
 
    };

    export default AuthProvider;