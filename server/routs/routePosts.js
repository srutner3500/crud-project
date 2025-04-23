const express=require("express")
const router=express.Router()


const postController=require("../controlers/postController")
router.get("/",postController.getAllPost)
router.get("/:id",postController.getById)
router.post("/",postController.createNewPost)
router.put("/",postController.updatePost)
router.delete("/",postController.deleatPost)


module.exports=router