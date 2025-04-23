const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique: true
    },
    name:{
        required:true,
        type: String,
        required:true 
    },
    email:{
        type: String
    },
    phone:{
        required:true,
        type: String
    },
    address:{
        type:String
    }
},{
    timestamps: true
})
module.exports=mongoose.model("User",userSchema)