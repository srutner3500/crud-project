import {  useParams } from "react-router-dom"
import  Axios  from "axios"
import { useEffect, useState } from "react"

const GetByIdU=()=>{
const [user,setUser]=useState({})
const {id}=useParams()
    const fetchUsers=async()=>{
        const {data}=await Axios.get(`http://127.0.0.1:5000/api/user/${id}`)
        setUser(data)
        
     }
    useEffect(()=>{
        fetchUsers()
    },[])
    return(<>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080", flexDirection:"column", gap:"10px",fontFamily:"Winky Sans, sans-serif"}}> 
       <h1>{user.name}</h1>
       <br/>
       <h5 style={{color:" #ff0080 "}}>last update</h5>
       <h5>{user.updatedAt}</h5>
       <br/>
       <h5 style={{color:" #ff0080 "}}>user name</h5>
       <h5>{user.userName}</h5>
       <h5 style={{color:" #ff0080 "}}>address</h5>
       <h5>{user.address}</h5>
       <h5 style={{color:" #ff0080 "}}>phone</h5>
       <h5>{user.phone}</h5>
       <h5>{user.email}</h5>
       </div>
       </div>
    </>)
}
export default GetByIdU