const post=require("../models/Post")

const getAllPost=async(req,res)=>{
const posts=await post.find().sort({_id:1}).lean()   
res.json(posts)
}


const getById=async(req,res)=>{
    const{id}=req.params
    const thisPost= await post.findById(id)
    if(!thisPost){    
        return res.status(404).json({message:'task no faund'})
   }
   res.json(thisPost)
}


const createNewPost=async(req,res)=>{
    const {title,body}=req.body
    if(!title){
        return res.status(400).json({message:'title is requier'})
    }
        const newPost=await post.create({title,body})
        if(newPost){
            return res.status(201).json({message: "new post created"})
        }
}

const updatePost= async(req,res)=>{
    const {_id,title,body}=req.body
    if(!title){
        return res.status(400).json({message:'title is requier'})
    }
   
        const newPost=await post.findById(_id)
        if(!newPost){    
             return res.status(404).json({message:'post no faund'})
        }
        newPost.title=title
        newPost.body=body

         
        const upPost=await newPost.save()
        res.json("updated sucssefuly")
    }
       
        const deleatPost=async(req,res)=>{
            const {_id}=req.body
            const resutlPost=await post.findById(_id).exec()
            if(!resutlPost){
                return res.status(404).json({message:'no post found'})
            }
         await resutlPost.deleteOne()
         res.json( "is deleted")
            }


module.exports={getAllPost,createNewPost,updatePost,deleatPost,getById}