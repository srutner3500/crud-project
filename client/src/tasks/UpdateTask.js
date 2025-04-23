import { useState } from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputs.css"

const UpdateTask=()=>{
    const navig=useNavigate()
     const location = useLocation()
     const task = location.state?.task
     
      const [title,setTitle]=useState(task.title)
      const [tags,setTags]=useState(task.tags)
  
      const update=async(e)=>{
        e.preventDefault()
      
        await Axios.put("http://localhost:5000/api/task",{_id:task._id,title:title===""?task.title:title,tags:tags[0]===""?task.tags:tags,complete:task.complete})
   
         navig('/tasks')
      }
     return(<>
        <br/> <br/>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>update task</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
     <form  style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}} onSubmit={update}>
       <input className="input" onChange={(e)=>{setTitle(e.target.value)}} placeholder={`title: ${title}`}></input>
        <input className="input" onChange={(e)=>{setTags(e.target.value.split(","))}} placeholder={`tags: ${tags}`}></input>
       <button className="save" type="submit">update</button>
     </form>
     </div>
     </div>
    
    
     </>)

}

export default UpdateTask