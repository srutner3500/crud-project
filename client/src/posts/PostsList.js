import { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import SinglePost from "./SinglePost"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const PostList=()=>{
 const [searchWord, setsearchWord] = useState("")
 const [posts,setPosts]  =useState([]) 
const [filterdPost,setFilterdPost]=useState([])
 const fetchPosts=async()=>{
    const {data}=await Axios.get("http://127.0.0.1:5000/api/post")
    setPosts(data)
    setFilterdPost(data)
 }
useEffect(()=>{
    fetchPosts()
},[])
useEffect(()=>{
    const newArr=posts.filter((element) => {
           return element.title.indexOf(searchWord) > -1
       })
       setFilterdPost(newArr)
   
   },[searchWord])
if (posts.length === 0) return (<>
 <br/> <br/>   <br/> <br/>   <br/> <br/>
    <div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
    <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>posts</h1>
  
    <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab     component={Link} 
    to="/posts/add" 
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
        <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>posts</h1>

   
<input className="search" type="text" onChange={(e) => { setsearchWord(e.target.value) }} placeholder="search"></input>
<div style={{display:"flex",flexWrap: "wrap",gap:"20px",width:`calc(${25 * 3}vw + 55px)`}}>
{filterdPost.map((post)=>{
    return <div>
       <SinglePost fetchPosts={fetchPosts} post={post}/>
    </div>
})}
<Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab     component={Link} 
    to="/posts/add" 
    sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
    aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
</div>
<br/> <br/>   <br/> <br/>   <br/> <br/>
</div>
</> )
}
export default PostList
