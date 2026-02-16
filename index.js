const express=require("express")
const connectToDatabase=require("./db/db")
const dotenv=require("dotenv");
dotenv.config();
const app = express();
connectToDatabase();
const PORT=process.env.PORT;

app.listen(PORT,()=>{console.log(`server is running on${}`)})

app.get("/",(req,res)=>{
    res.send("Madan Katuwal")
})