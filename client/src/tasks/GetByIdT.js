import {  useParams } from "react-router-dom"
import  Axios  from "axios"
import { useEffect, useState } from "react"

const GetByIdT=()=>{
const [task,setTask]=useState(null)
const [tag,setTag]=useState("")
const {id}=useParams()
    const fetchTasks=async()=>{
        const {data}=await Axios.get(`http://127.0.0.1:5000/api/task/${id}`)
        setTask(data)
        
        {console.log(task)}
        
     }
    useEffect(()=>{
        fetchTasks()
    },[id])
    if(!task){
        return<h1>loading...</h1>
    }
 

    return(<>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080", flexDirection:"column", gap:"10px",fontFamily:"Winky Sans, sans-serif"}}> 
        <h1>{task.title}</h1>
        <br/>
        <h5 style={{color:" #ff0080 "}}>last update</h5>
       <h5>{task.updatedAt}</h5>
       <br/>
       <h5 style={{color:" #ff0080 "}}>tags</h5>
       <h5>{ task.tags.join(", ")}</h5>
       
       </div>
       </div>
    </>)
}
export default GetByIdT