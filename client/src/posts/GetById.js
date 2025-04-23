import {  useParams } from "react-router-dom"
import  Axios  from "axios"
import { useEffect, useState } from "react"

const GetById=()=>{
const [post,setPost]=useState({})
const {id}=useParams()
    const fetchPosts=async()=>{
        const {data}=await Axios.get(`http://127.0.0.1:5000/api/post/${id}`)
        setPost(data)
        
     }
    useEffect(()=>{
        fetchPosts()
    },[])
    return(<>
     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
     <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080", flexDirection:"column", gap:"10px",fontFamily:"Winky Sans, sans-serif"}}> 
       <h1>{post.title}</h1>
       <br/>
       <h5 style={{color:" #ff0080 "}}>last update</h5>
       <h5>{post.updatedAt}</h5>
       <br/>
       <h5 style={{color:" #ff0080 "}}>body:</h5>
       <h5>{post.body}</h5>
       </div>
       </div>
    </>)
}
export default GetById