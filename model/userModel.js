const mongoose=require("mongoose")
import { type } from 'whatwg-url';

const userSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    Lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},



})
model.exports=mongoose.model('User',userSchema);
