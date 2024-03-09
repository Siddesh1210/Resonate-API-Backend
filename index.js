import express from 'express';
const app = express();
import cors from 'cors'
import dotenv from 'dotenv';
import productRoute from './routers/product.route.js';

dotenv.config();

app.use(cors())
app.use("/products",productRoute)

app.get("/",(req,res)=>res.send("Home Page"))


app.listen(process.env.PORT,()=>{
    console.log("Server started at port :  " + process.env.PORT);
})