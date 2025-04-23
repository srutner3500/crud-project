const express=require("express")
const router=express.Router()


const taskControler=require("../controlers/taskControler")
router.get("/",taskControler.getAllTasks)
router.get("/:id",taskControler.getById)
router.post("/",taskControler.createNewTask)
router.put("/",taskControler.updateTask)
router.delete("/",taskControler.deleatTasks)

module.exports=router