const exp =require("express")
const app=exp()
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
app.get("/showdata",(req,res)=>{
    var un=req.query["un"]
    var ag=req.query["age"]
    var ad=req.query["address"]
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
}).listen(8901)
console.log("port listening 8901....")




//***************************************** */


/*
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
})*/