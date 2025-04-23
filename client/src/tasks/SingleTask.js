import axios from "axios"
import { useState } from "react"
import { data, Link, useNavigate } from "react-router-dom"
import "../style/elements.css"
import "../style/buttons.css"
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";






 const SingleTask=({fetchTasks,task1})=>{
    const navig=useNavigate()
    const [completeT, setCompleteT]=useState(task1.complete)


    const deleteTask=async()=>{//פונקציה למחיקה לכל משימה בודדת
const {data}=await axios.delete("http://localhost:5000/api/task",{data:{_id:task1._id}})
fetchTasks()
}


const completeTask=async()=>{
    const {data}=await axios.put("http://localhost:5000/api/task",{_id:task1._id,title:task1.title,complete:!completeT,tags:task1.tags})
    setCompleteT(!completeT)
}




return(<>
<div className="onElement">
<Link className="link" to={`/tasks/${task1._id}`}><h1>{task1.title}</h1></Link>
<div style={{display:"flex",gap:"25px"}}>
 <button style={{color: "red"}} className="button" onClick={deleteTask}><MdDelete /></button>
<button className="button" onClick={()=>{completeTask()}} style={{color:completeT?"white": "blue",backgroundColor:completeT&&"blue"}}><IoMdCheckmark /></button>
<button style={{color: "green"}} className="button" onClick={()=>{navig("/tasks/UpdateTask",{ state: { task: task1 } })}}><RiPencilFill /></button>
</div> 
</div>
</>)

}

export default SingleTask
