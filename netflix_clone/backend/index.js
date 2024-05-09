import express from 'express';
import dotenv from 'dotenv';

//path config for the port number, it comes from .env file
dotenv.config({
    path:".env"
})

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.listen( process.env.PORT,()=>{
    console.log(`Server is running on port ${ process.env.PORT}`);
});