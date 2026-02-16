// katuwalmadan55_db_user
// 7PvwXM8rYSFDxtiP

const mongoose=require("mongoose")
const dotenv=require("dotenv");
const DB_URL=process.env.DB_URL;
const connectToDatabase=async()=>{
    try{
        await mongoose.connect(DB_URL)
        console.log("DB connected")
    }
    catch (error){
        console.log(`error connectiong DB ${error}`)
    }   
}
module.exports=connectToDatabase