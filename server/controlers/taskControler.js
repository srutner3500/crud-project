const task=require("../models/Task")

const getAllTasks=async(req,res)=>{
const tasks=await task.find().sort({_id:1}).lean()

res.json(tasks)
}
const getById=async(req,res)=>{
    const{id}=req.params
    const thisTask= await task.findById(id)
    if(!thisTask){    
        return res.status(404).json({message:'task no faund'})
   }
   res.json(thisTask)
}

const createNewTask=async(req,res)=>{
    const {title,complete,tags}=req.body
    if(!title){
        return res.status(400).json({message:'title is requier'})
    }
        const newTask=await task.create({title,complete,tags})
        if(newTask){
            return res.status(201).json({message: "new task created"})
        }
}

const updateTask= async(req,res)=>{
    const {_id,title,complete,tags}=req.body
    if(!title){
        return res.status(400).json({message:'title is requier'})
    }
   
        const newTask=await task.findById(_id)
        if(!newTask){    
             return res.status(404).json({message:'task no faund'})
        }
        newTask.title=title
        newTask.complete=complete
        newTask.tags=tags
         
        const upTask=await newTask.save()
        res.json(`${upTask.title} is updated sucssefuly`)
    }
       
        const deleatTasks=async(req,res)=>{
            const {_id}=req.body
            const resultTask=await task.findById(_id)
            if(!resultTask){
                return res.status(404).json({message:'no task found'})
            }
        await resultTask.deleteOne()
         res.json(`${_id} is deleted`)
            }


module.exports={getAllTasks,createNewTask,updateTask,deleatTasks,getById}