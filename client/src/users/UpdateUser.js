import { useState } from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputsUser.css"

const UpdateUser=()=>{
    const navig=useNavigate()
     const location = useLocation()
     const user = location.state?.user
     
     const[name,setName] =useState(user.name)
     const[userName,setUserName]=useState(user.userName)
     const[email,setEmail]=useState(user.email)
     const[address,setAddress]=useState(user.address)
     const[phone,setPhone]=useState(user.phone)
  
      const update=async(e)=>{
        e.preventDefault()
        await Axios.put("http://localhost:5000/api/user",{_id:user._id,name:name===""?user.name:name,userName:userName===""?user.userName:userName,email:email===""?user.email:email,address:address===""?user.address:address,phone:phone===""?user.phone:phone})
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
     <br/>  <br/>
     <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>update user</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
     <form style={{display:"flex",flexDirection:"column",gap:"3vh",alignItems:"center", justifyContent:"center"}} onSubmit={update}>
     <input className="inputU"  onChange={(e)=>{setName(e.target.value)}} placeholder={`name: ${user.name}` }></input>
        <input className="inputU"  onChange={(e)=>{setUserName(e.target.value)}} placeholder={`user name: ${user.userName}`}></input>
        <input className="inputU"  onChange={(e)=>{setEmail(e.target.value)}} placeholder={`email: ${user.email}`} ></input>
        <input className="inputU"  onChange={(e)=>{setAddress(e.target.value)}} placeholder={`address: ${user.address}`}></input>
        <input className="inputU"  onChange={(e)=>{setPhone(e.target.value)}} placeholder={`phone: ${user.phone}`}></input>        
       <button className="saveU"  type="submit">עדכן</button>
     </form>
    </div>
</div>
    
     </>)

}

export default UpdateUser