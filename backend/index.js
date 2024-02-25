import express from 'express'

const app = express();
const port = 5000;

app.listen(port,()=>{
    console.log('server running on '+port);
})

app.get("/",(req,res)=>{
   return  res.send("Hello")
})