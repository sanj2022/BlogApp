import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () =>{

const[inputs,setInputs] = useState({
    username:"",
    email:"",
    password:""
})

const[err,setError] = useState(null)
const naviagte = useNavigate()

const handlechange = e =>{
  setInputs(prev => ({...prev ,[e.target.name]:e.target.value}))
}

const handleSubmit = async e=>{
    e.preventDefault()
    try {
     await axios.post("http://localhost:8800/api/auth/register" , inputs )
     naviagte("/login")

    } catch(err) {
   setError(err.response.data)
    }
}

console.log(inputs)
    return (
        <div className='auth'>
        <h1> Register</h1>
        <form>
            <input required ="text" placeholder ="username" name ="username" onChange = {handlechange}/>
            <input required type ="text" placeholder ="email" name ="email" onChange = {handlechange}/>
            <input required type ="password" placeholder ="password" name="password" onChange = {handlechange}/>
            <button onClick ={handleSubmit}>Register</button>
            {err && <p>{err}</p>}
            <span>Do have an account? <Link to="/Login">Login</Link>
            </span>
        </form>

    </div>
    )
}

export default Register