import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import User from "../img/user.png"
import Menu from "../components/Menu"
import {Link} from 'react-router-dom'

 
const Single = () =>{
    return (
        <div className = 'single'>
            <div className ="content">
            <img src ="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt =""></img>
            <div className="user">
            <img src ={User} alt =""></img>
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
     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit"</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    <br></br>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
     </div>
        <Menu/>
      </div>
    )
}

export default Single


