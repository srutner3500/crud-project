import axios from "axios"
import { data, Link, useNavigate } from "react-router-dom"
import "../style/elements.css"
import "../style/buttons.css"
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";




 const SingleUser=({fetchUser,user})=>{
    const navig=useNavigate()
   
const deleteUser=async()=>{
const {data}=await axios.delete("http://localhost:5000/api/user",{data:{_id:user._id}})
fetchUser()
}





return(<>
<div className="onElement">

<Link className="link" to={`/users/${user._id}`}><h1>{user.userName}</h1></Link>
<div style={{display:"flex",gap:"25px"}}>
 <button style={{color: "red"}}  className="button" onClick={deleteUser}><MdDelete /></button>
 <button style={{color: "green"}}  className="button" onClick={()=>{navig('/users/update',{state:{user}})}}><RiPencilFill /></button>
 </div>
 </div>
</>)

}
export default SingleUser
