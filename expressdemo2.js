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
var result=""
app.post("/postdemo",urlencoder,(req,res)=>{
    var un=req.body.un
    var ag=req.body.age
    var ad=req.body.address
    result=result+"<br> user name:"+un+"<br>age:"+ag+"<br> address:"+ad
const myinp=new User({
    sname:un,
    age:ag,
    address:ad
    
})
myinp.save().then(()=>{
    console.log(result+"success")
    
}).catch((err)=>{
    console.log("error:",err)
})
  res.write(result+"<h1>Successfully Inserted</h1>")
res.end()
}).listen(8902)
console.log("port listening 8902....")



