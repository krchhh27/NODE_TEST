const express = require("express")
const app= express()


app.get("/",(req,res)=>{
res.send("ok")
})

app.listen(5000,()=>{
console.log("Server running")
})

module.exports=app
