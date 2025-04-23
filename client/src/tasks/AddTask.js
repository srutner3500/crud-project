import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputs.css"



const AddTask=()=>{

const [title, setTitle]=useState("")
const [tags, setTags]=useState([])
const navig=useNavigate()


const submitForm=async(e)=>{
    e.preventDefault()
    const {newTask}=await Axios.post("http://localhost:5000/api/task",{title,tags})
    navig('/tasks')
    
 }


    return(<>
    <br/> <br/>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>add task</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 

<form onSubmit={submitForm} style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}}>
    <input required={true} onChange={(e)=>{setTitle(e.target.value)}} placeholder="insert title" className="input"></input>
    <input  onChange={(e)=>{setTags(e.target.value.split(","))}} placeholder="insert tags" className="input"></input>
    <button className="save" disabled={title===""} type="submit">send</button>
</form>  
</div>
</div>

    </>)
}
export default AddTask

