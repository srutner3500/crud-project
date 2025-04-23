require ("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbConn")
const mongoose=require("mongoose")
const app=express()
app.use(cors(corsOptions))
app.use(express.static("public"))

connectDB()


const PORT=process.env.PORT||2500
app.use(express.json())

app.use("/api/task",require("./routs/routeTasks"))
app.use("/api/user",require("./routs/routeUsers"))
app.use("/api/post",require("./routs/routePosts"))





app.listen(PORT,()=>{console.log(`server runing on port${process.env.PORT}`)})