import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Login = () =>{

    const[inputs,setInputs] = useState({
        username:"",
        password:""
    })
    
    const[err,setError] = useState(null)
    const naviagte = useNavigate()

    const { login } = useContext(AuthContext);

    const {currentUser} = useContext(AuthContext);
    console.log(currentUser)
    
    const handlechange = e =>{
      setInputs(prev => ({...prev ,[e.target.name]:e.target.value}))
    }
    
    const handleSubmit = async e=>{
        e.preventDefault()
        try {
         await login(inputs)
         naviagte("/")
      
    
        } catch(err) {
       setError(err.response.data)
        }
    }
    
    console.log(inputs)

    return (
        <div className='auth'>
            <h1> Login</h1>
            <form>
                <input type ="text" placeholder ="username" name="username" onChange={handlechange}/>
                <input type ="password" placeholder ="password" name="password" onChange={handlechange}/>
                <button onClick = {handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't have an account? <Link to="/Register">Register</Link>
                </span>
            </form>

        </div>
    )
}

export default Login