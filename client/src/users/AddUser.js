import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputsUser.css"

const AddUser=()=>{
  const[name,setName] =useState("")
  const[userName,setUserName]=useState("")
  const[email,setEmail]=useState("")
  const[address,setAddress]=useState("")
  const[phone,setPhone]=useState("")
  const navig=useNavigate()

const submitForm=async(e)=>{
    e.preventDefault()
    await Axios.post("http://localhost:5000/api/user",{name,userName,email,address,phone})
    .then(response => {
      if (response.status === 201) {
          navig('/users')
      }
  })
  .catch(error => {
   if (error.response) {
       if (error.response.status === 409) {
           alert("שם המשתמש כבר קיים! נסה שם אחר.")
      
   }}})
 }
    return(<>
    <br/> <br/>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>add user</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
       <form onSubmit={submitForm} style={{display:"flex",flexDirection:"column",gap:"3vh",alignItems:"center", justifyContent:"center"}}>
        <input  className="inputU" required={true} onChange={(e)=>{setName(e.target.value)}} placeholder="insert name" ></input>
        <input  className="inputU" required={true} onChange={(e)=>{setUserName(e.target.value)}} placeholder="insert user name"></input>
        <input  className="inputU" onChange={(e)=>{setEmail(e.target.value)}} placeholder="insert email" ></input>
        <input  className="inputU" onChange={(e)=>{setAddress(e.target.value)}} placeholder="insert address"></input>
        <input  className="inputU" required={true} onChange={(e)=>{setPhone(e.target.value)}} placeholder="insert phone"></input>        
        <button className="saveU" type="submit" disabled={name===""||userName===""||phone===""}>send</button>
       </form>
       </div>
       </div>
    </>)
}
export default AddUser