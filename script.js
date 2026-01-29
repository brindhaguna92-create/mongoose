const mongoose =require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/brindha").then(()=>{
    console.log("connection success")
}
).catch(()=>{
console.log("ërror")
}
)
const myinp=new User({
    sname:"sharmila",
    age:21,
    address:"33/a gold street karur"
    
})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("error:",err)
})