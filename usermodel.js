const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
   sname:{
     type:String,
    required:true
},
age:{
    type:Number,
    required:true,
    min:18,
    max:97
},
address:{
    type:String,
    required:true,
    uppercase:true
},
insertedAt:{
    type:Date,
    default:()=>Date.now()
},
city:{
    type:String,
    default:"karur"
}
})
const usrMdl=mongoose.model("sdetails",userSchema)
module.exports=usrMdl