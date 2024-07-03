const express =require('express')
const connectdb =require('./config/connectdb.js')


const app=express()
connectdb()

app.listen(5000,(err)=>err?console.log(err):console.log("Server is runnig"))