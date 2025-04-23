import { NavLink } from "react-router-dom"
import "../style/styleMenu.css"


const Navigation=()=>{

return(<>
<>
<div style={{display:"flex" , backgroundColor:"#ff0080", width:"100%" , height: "10vh", alignItems:"center", justifyContent:"center", gap:"6%", boxShadow:"0px 0px 5px",position:"fixed"}}>
   <NavLink  className="menu"  to="/tasks">task</NavLink>
  <NavLink  className="menu" to="/users">users</NavLink>
   <NavLink  className="menu" to="/posts">posts</NavLink>
   </div>
</>


</>)
}



export default Navigation