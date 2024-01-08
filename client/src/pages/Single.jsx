import React, { useContext, useEffect } from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import User from "../img/user.png"
import Menu from "../components/Menu"
import {Link, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import axios from "axios";
import moment from "moment";
import { AuthContext } from '../context/authContext'

 
const Single = () =>{
  const[post , setPost] = useState({})

  const postId = useLocation().pathname.split("/")[2];
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(postId)

  useEffect(() => {
    const fetchData  = async () => {
      try {
    const res= await axios.get(`http://localhost:8800/api/posts/${postId}`);
    setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[postId]);

  const handleDelete = async () => {
    try {
   const res= await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
    withCredentials: true, // Include cookies in the request
    headers: {
      'Content-Type': 'application/json',
      // Other headers as needed
    },
  });
   navigate("/")
    } catch (err) {
      console.log(err)
    }
  };
console.log(post)
    return (
        <div className = 'single'>
            <div className ="content">
            <img src={`../upload/${post.img}`} alt="" />
            <div className="user">
             {/* // console.log({post.userImg}) */}
             <img src ={post.userImg} alt =""></img>
        <div className="info">
        <span> {post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
     </div>
    { currentUser.username === post.username && 
    (<div className='edit'>
        <Link to ={'/Write?edit=1' } state ={post}>
        <img src={Edit} alt=""/>
        </Link>
        <img onClick={handleDelete} src={Delete} alt=""/>
        </div>
        )}
     </div>
     <h1>{post.title}</h1>
      {post.desc}
     </div>
        <Menu cat ={post.cat}/>
      </div>
    )
}

export default Single


