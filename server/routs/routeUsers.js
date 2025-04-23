const express=require("express")
const router=express.Router()


const userControler=require("../controlers/userControler")
router.get("/",userControler.getAllUsers)
router.post("/",userControler.createNewUser)
router.put("/",userControler.updateUser)
router.delete("/",userControler.deleatUser)
router.get("/:id",userControler.getById)

module.exports=router