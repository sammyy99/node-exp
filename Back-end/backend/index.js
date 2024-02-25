import express from '../express'

const app = express();
const port = 5000;

app.listen(port,()=>{
    console.log('server running on '+port);
})

app.get("/",(req,res)=>{
   return  res.send("Hello")
})

app.post("/add",(req,res)=>{
    res.sendStatus(201)
})

app.delete("/remove/user",(req,res)=>{
    res.sendStatus(200)
})