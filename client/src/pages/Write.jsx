import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from "axios";
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const Write = () =>{ 

    const state = useLocation().state
   // console.log(state)
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc ||"");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const upload = async e =>{
        try {
       
      const formData = new FormData();
      formData.append("file", file);
      console.log(file)
      console.log(formData)
        const res= await axios.post("http://localhost:8800/api/upload/", formData, {
            withCredentials: true, // Include cookies in the request
            headers: {
                'Content-Type': 'multipart/form-data',
              // Other headers as needed
            },
          });
          
        console.log(res.data)
        return res.data
        } catch(err) {
            console.log(err)
        }
    }

    const handleClick = async e =>{
       e.preventDefault()
      const imgURl =  await upload()
      const requestConfig = {
        withCredentials: true, // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
          // Other headers as needed
        },
      };
      try {
        state ? await axios.put(`http://localhost:8800/api/posts/${state.id}` ,{
            title,desc: value,cat,img:file ? imgURl:""},requestConfig)
            : await axios.post(`http://localhost:8800/api/posts/` ,{
                title,desc: value,cat,img:file ? imgURl:"",
            date: moment(Date.now()).format("YYYY-MM-DD hh:mm:ss")},requestConfig)

      } catch(err) {
        console.log(err)
      }

    }

   
    //console.log(value)
    return (
        <div className="add">
            <div className="content">
                <input type="text" value={title} placeholder="Title" onChange={e=> setTitle(e.target.value)}></input>
            <div className="editorContainer">
            <ReactQuill className ="editor" theme="snow" value={value} onChange={setValue} />
            </div>
            
            </div>
            <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status:</b> Draft
                </span>
                <span>
                    <b>Visibility:</b> Public
                </span>
                <input style= {{display:"none"}} type="file" name="" id="file" onChange={e=> setFile(e.target.files[0])} />
                <label className="file" htmlFor="file">Uplaod Image</label>
                <div className="buttons">
                    <button>Save as Draft</button>
                    <button onClick ={handleClick}>Publish</button>
                </div>

                
                </div>
            <div className="item">
                <h1>Category</h1>
                <div className="cat">
                <input type="radio"  checked ={cat ==="art"} name="cat" value="art"  id="art" onChange={e=> setCat(e.target.value)}/>
                <label htmlFor="art">ART</label>
                </div>
                <div className="cat">
                <input type="radio"  checked ={cat ==="science"} name="cat" value="science"  id="science" onChange={e=> setCat(e.target.value)}/>
                <label htmlFor="science">SCIENCE</label>
                </div>
                <div className="cat">
                <input type="radio"   checked ={cat ==="technology"} name="cat" value="technology"  id="technology" onChange={e=> setCat(e.target.value)}/>
                <label htmlFor="technology">TECHNOLOGY</label>
                </div>
                <div className="cat">
                <input type="radio"  checked ={cat ==="cinema"} name="cat" value="cinema"  id="cinema" onChange={e=> setCat(e.target.value)}/>
                <label htmlFor="cinema">CINEMA</label>
                </div>
                <div className="cat">
                <input type="radio"  checked ={cat ==="design"} name="cat" value="design"  id="design" onChange={e=> setCat(e.target.value)}/>
                <label htmlFor="design">DESIGN</label>
                </div>
                <div className="cat">
                <input type="radio"  checked ={cat ==="food"} name="cat" value="food"  id="food" onChange={e=> setCat(e.target.value)}/>
                <label htmlFor="food">FOOD</label>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Write