import express from 'express'
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // CORS blocker issue fix

app.listen(port,()=>{
    console.log('server running on '+port);
})

app.post('/logindata',(req,res)=>{
    const {user,pwd} = req.body
    console.log(user,pwd);
    res.sendStatus(200);
})
