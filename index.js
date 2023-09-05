const express=require('express')
const mongoose=require('mongoose')
const helmet=require('helmet')
const dotenv=require('dotenv')
const morgan=require('morgan')
 const userRoute=require('./routes/users')
 const authRoute=require('./routes/auth')

const app=express()
app.listen(8000,()=>{console.log("momiii")})
dotenv.config()
// connect function
const connect = (uri) => {
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, })
}

// conection string
const start = async () => {

    try {
        await connect(process.env.MONGO_URI);
        console.log("connected");
        app.listen(8000, () => {
            console.log("This is working", 8000);
        })
    } catch (error) {
        console.log(error);
    }

}
// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},)
// .then(()=>console.log("connected to db successfully"))
// .catch((err)=>{console.error(err);})
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.get('/',(req,res)=>{res.end("welcome to homepage")})
app.get('/users',(req,res)=>{res.end("welcome to users page")})
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)

start()