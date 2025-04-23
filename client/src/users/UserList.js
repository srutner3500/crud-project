import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import SingleUser from "./SingleUser"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const UserList=()=>{
 const [searchWord, setsearchWord] = useState("")
 const [user,setUser]  =useState([]) 
const [filterdUser,setFilterdUser]=useState([])
const [searchBy,setSearchBy]=useState("userName")
 const fetchUser=async()=>{
    const {data}=await Axios.get("http://127.0.0.1:5000/api/user")
    setUser(data)
    setFilterdUser(data)
 }
useEffect(()=>{
    fetchUser()
},[])
useEffect(()=>{
    let newArr=[]
    if(searchBy==="name"){    
        newArr=user.filter((element) => {
        return element.name.indexOf(searchWord) > -1
 
    })}
    if(searchBy==="userName"){    
        newArr=user.filter((element) => {
        return element.userName.indexOf(searchWord) > -1
 
    })}
    if(searchBy==="phone"){    
        newArr=user.filter((element) => {
        return element.phone.indexOf(searchWord) > -1
 
    })}
    if(searchBy==="email"){    
        newArr=user.filter((element) => {
        return element.email.indexOf(searchWord) > -1
 
    })}


       setFilterdUser(newArr)
   
   },[searchWord])
if (user.length === 0) return (<>
    <br/> <br/>   <br/> <br/>   <br/> <br/>
    <div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
    <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>users</h1>
    <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab     component={Link} 
    to="/users/add"
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
    <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>users</h1>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <select className="SearchBy" onChange={(e)=>{setSearchBy(e.target.value)}}>
      <option value="userName" >Search by</option>
        <option value="name">name</option>
        <option value="userName">user name</option>
        <option value="phone">phone</option>
        <option value="email">email</option>
      </select>
<input className="search" type="text" onChange={(e) => { setsearchWord(e.target.value) }} placeholder="search"></input>
</div>
<div style={{display:"flex",flexWrap: "wrap",gap:"20px",width:`calc(${25 * 3}vw + 55px)`}}>
<Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab     component={Link} 
    to="/users/add" 
    sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
    aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
{filterdUser.map((user)=>{
    return <div>
       <SingleUser fetchUser={fetchUser} user={user}/>
    </div>
})}
<br/> <br/>   <br/> <br/>   <br/> <br/>
</div>
</div>
</> )
}
export default UserList
