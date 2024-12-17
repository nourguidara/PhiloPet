const express=require("express");
const path = require("path");
const app=express();
const petRoute = require("./Routes/petRoute"); 
const connectDb=require('./Configuration/connectDb')

const cors = require('cors');

const dotenv=require("dotenv")
dotenv.config();
const port=process.env.PORT;
connectDb();

app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());


app.use("/api", petRoute);
app.listen(port, (error)=>{
    if(error){console.log("Server Failed")}
    else{ console.log(`Server Started on port ${port}`)}
});

