import axios from "axios"
import { data, Link, useNavigate } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import "../style/elements.css"
import "../style/buttons.css"

 const SinglePost=({fetchPosts,post})=>{
    const navig=useNavigate()
   
const deletePost=async()=>{
const {data}=await axios.delete("http://localhost:5000/api/post",{data:{_id:post._id}})
fetchPosts()
}





return(<>
<div className="onElement">


 <Link className="link" to={`/posts/${post._id}`}><h1>{post.title}</h1></Link>
 <div style={{display:"flex",gap:"25px"}}>
 <button className="button" style={{color: "red"}} onClick={deletePost}><MdDelete /></button>
 <button className="button" style={{color: "green"}} onClick={()=>{navig('/posts/update',{state:{post}})}}><RiPencilFill /></button>
 </div>
 </div>
</>)

}
export default SinglePost
