import { useState } from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from "react-router-dom"

const UpdatePost=()=>{
    const navig=useNavigate()
     const location = useLocation()
     const post = location.state?.post
     
      const [title,setTitle]=useState(post.title)
      const [body,setBody]=useState(post.body)
  
      const update=async(e)=>{
        e.preventDefault()
        await Axios.put("http://localhost:5000/api/post",{_id:post._id,title:title===""?post.title:title,body:body===""?post.body:body})
         navig('/posts')
      }
     return(<>
       <br/> <br/>
           <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>update post</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
     <form style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}} onSubmit={update}>
       <input className="input"  onChange={(e)=>{setTitle(e.target.value)}} placeholder={`title: ${post.title}`}></input>
        <input className="input" onChange={(e)=>{setBody(e.target.value)}} placeholder={`body: ${post.body}`}></input>
       <button className="save" type="submit">send</button>
     </form>
    </div>
    </div>
    
     </>)

}

export default UpdatePost