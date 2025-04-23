const user=require("../models/User")

const getAllUsers=async(req,res)=>{
const users=await user.find().sort({_id:1}).lean()
     
res.json(users)
}


const getById=async(req,res)=>{
    const{id}=req.params
    const thisUser= await user.findById(id)
    if(!thisUser){    
        return res.status(404).json({message:'task no faund'})
   }
   res.json(thisUser)
}

const createNewUser=async(req,res)=>{
    const {userName,name,email,phone,address}=req.body
    const theSame= await user.findOne({userName:userName})
    if(theSame){
        return res.status(409).json({message: "user name exsist"})
    }
    if(!phone||!userName||!name){
        return res.status(400).json({message:'phone, userName, name are requier'})
    }
        const newUser=await user.create({userName,name,email,phone,address})
        if(newUser){
            return res.status(201).json({message: "new user created"})
        }
}

const updateUser= async(req,res)=>{
    const {_id,userName,name,email,phone,address}=req.body
    const theSame= await user.findOne({userName:userName})

    if(!phone||!userName||!name)
        {
        return res.status(400).json({message:'phone, userName, name are requier'})
    }
   
        const newUser=await user.findById(_id)
        if(!newUser){    
             return res.status(404).json({message:'user no faund'})
        }
        if(theSame&&userName!=newUser.userName){
            return res.status(409).json({message: "user name exsist"})
        }
        newUser.userName=userName
        newUser.name=name
        newUser.email=email
        newUser.phone=phone
        newUser.address=address
         
        const upUser=await newUser.save()
        return res.status(201).json({message:'is updated sucssefuly'})
    }
       
        const deleatUser=async(req,res)=>{
            const {_id}=req.body
            const resultUser=await user.findById(_id).exec()
            if(!resultUser){
                return res.status(404).json({message:'no user found'})
            }
         await resultUser.deleteOne()
         res.json( "is deleted")
            }


module.exports={getAllUsers,updateUser,createNewUser,deleatUser,getById}