import { createContext, useEffect } from "react";
import axios from "axios"
import { useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const[currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user"))|| null)
    
    const login = async(inputs) => {
      // const res =  await axios.post("http://localhost:8800/api/auth/login" , inputs );

       const res = await axios.post('http://localhost:8800/api/auth/login', inputs, {
         withCredentials: true, // Include cookies in the request
         headers: {
           'Content-Type': 'application/json',
           // Other headers as needed
         },
       });

       setCurrentUser(res.data);
    };

    const logout = async(inputs) => {
       // const res =  await axios.post("http://localhost:8800/api/auth/logout" );

        const res = await axios.post('http://localhost:8800/api/auth/logout', {
    withCredentials: true, // Include cookies in the request
    headers: {
      'Content-Type': 'application/json',
      // Other headers as needed
    },
  });
        setCurrentUser(null);
     };


     useEffect(() => {
       localStorage.setItem("user" ,JSON.stringify(currentUser));
     } , [currentUser]);

     return (
        <AuthContext.Provider  value ={{currentUser, login , logout}}>
            {children}
            </AuthContext.Provider>
     ); 
};