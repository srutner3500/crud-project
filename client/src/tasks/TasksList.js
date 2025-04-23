import {  useEffect, useState } from "react"
import Axios from "axios"
import { data, Link, useNavigate } from "react-router-dom"
import SingleTask from "./SingleTask"
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';





   
 


const TasksList = () => {
    const nav=useNavigate()
    const [searchWord, setsearchWord] = useState("")
    const [tasks, setTasks] = useState([])
    const [filterdTask,setFilterdTask]=useState([])
    const [id,setId]=useState("")
    const fetchTasks = async () => {
        const { data } = await Axios.get("http://localhost:5000/api/task")
        setTasks(data)
        setFilterdTask(data)
    }
    useEffect(() => {
        fetchTasks()
    }, [])

useEffect(()=>{
 const newArr=tasks.filter((element) => {
        return element.title.indexOf(searchWord) > -1
    })
 setFilterdTask(newArr)

},[searchWord])



    if (tasks.length === 0) return (<>
    <br/> <br/>   <br/> <br/>   <br/> <br/>
    <div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
    <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>tasks</h1>
 
    <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab     component={Link} 
    to="/tasks/add" 
    sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
    aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
   
    </div>

     </>)
    
    return (<>
       <br/> <br/>   <br/> <br/>   <br/> <br/>
       <div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
        <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>tasks</h1>
        <input className="search" type="text" onChange={(e) => { setsearchWord(e.target.value) }} placeholder="search"></input>
        <div style={{display:"flex",flexWrap: "wrap",gap:"20px",width:`calc(${25 * 3}vw + 55px)`}}>
        {filterdTask.map((task) => {
            return <div>
              <SingleTask fetchTasks={fetchTasks} task1={task}/>
            </div>  
        })}
        </div>
             <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab     component={Link} 
    to="/tasks/add" 
    sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
    aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
    <br/> <br/>   <br/> <br/>   <br/> <br/>
    </div>

    </>)
}
export default TasksList
