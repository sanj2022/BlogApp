import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Register = () =>{

const[inputs,setInputs] = useState({
    username:"",
    email:"",
    password:""
})

const handlechange = e =>{
  setInputs(prev => ({...prev ,[e.target.name]:e.target.value}))
}

const handleSubmit = async e=>{
    e.preventDefault()
    try {
    const res = await axios.post("http://localhost:8800/api/auth/register" , inputs )
    console.log(res)
    } catch(err) {
   console.log(err)
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
            <p>Error!</p>
            <span>Do have an account? <Link to="/Login">Login</Link>
            </span>
        </form>

    </div>
    )
}

export default Register