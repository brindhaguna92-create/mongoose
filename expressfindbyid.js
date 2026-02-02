const exp =require("express")
const app=exp()
const bp=require("body-parser")
const urlencoder=bp.urlencoded({extented:false})
const mongoose=require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/brindha").then(()=>{
    console.log("connection success using mongoose")
}
).catch(()=>{
console.log("error connection")
}
)
async function dis()
{
    try{
        const result=await User.findById("697b1df7a8ecc983d75a20a8")
        console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
}
dis()