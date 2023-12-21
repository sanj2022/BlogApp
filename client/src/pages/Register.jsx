import React from 'react'
import { Link } from 'react-router-dom'

const Register = () =>{
    return (
        <div className='auth'>
        <h1> Register</h1>
        <form>
            <input required ="text" placeholder ="name"/>
            <input required type ="text" placeholder ="username"/>
            <input required type ="password" placeholder ="password"/>
            <button>Login</button>
            <p>Error!</p>
            <span>Do have an account? <Link to="/Login">Login</Link>
            </span>
        </form>

    </div>
    )
}

export default Register