const express=require("express");
const path = require("path");
const app=express();
const petRoute = require("./Routes/petRoute");
const userRoute = require("./Routes/userRoute");

const connectDb=require('./Configuration/connectDb')

// const contactRoute = require('./Routes/contactRoute');
const cors = require('cors');

const dotenv=require("dotenv")
dotenv.config();
const port=process.env.PORT;
connectDb();

app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
// app.use("/api/auth", require("./Routes/authRoute"));
// app.use("/api/contact", require("./Routes/contactRoute")); 

app.use(express.json());


app.use("/api", petRoute);
app.use("/api", userRoute);


app.listen(port, (error)=>{
    if(error){console.log("Server Failed")}
    else{ console.log(`Server Started on port ${port}`)}
});

