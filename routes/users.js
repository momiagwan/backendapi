const router=require("express").Router()
router.get("/",(req,res)=>{res.end("welcome to user route")})
module.exports=router