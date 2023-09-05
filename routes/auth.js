const router=require("express").Router()
router.get("/",(req,res)=>{res.end("welcome to auth route")})
module.exports=router