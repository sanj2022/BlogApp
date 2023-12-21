import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import {Link} from 'react-router-dom'

 
const Single = () =>{
    return (
        <div className = 'single'>
            <div className ="content">
            <img src ="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt =""></img>
            <div className="user">
            <img src ="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 " alt =""></img>
        <div className="info">
        <span> Sanjana</span>
        <p>Posted 2 days ago </p>
     </div>
     <div className='edit'>
        <Link to ={'/Write?edit=1'}>
        <img src={Edit} alt=""/>
        </Link>
        <img src={Delete} alt=""/>
        </div>
     </div>
     </div>
            <div className="menu">Menu</div>
      </div>
    )
}

export default Single


