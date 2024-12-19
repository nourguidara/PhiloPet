const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDb = require("./Configuration/connectDb");
const petRoute = require("./Routes/petRoute");
const userRoute = require("./Routes/userRoute");
// const contactRoute = require("./Routes/contactRoute");

dotenv.config();
const port = process.env.PORT;

// Connect to the database
connectDb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Ensure JSON bodies are parsed before hitting routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
// app.use("/api/auth", require("./Routes/authRoute"));
app.use("/api/contact", require("./Routes/contactRoute")); 
app.use("/api", petRoute);
app.use("/api", userRoute);

// Start the server
app.listen(port, (error) => {
  if (error) {
    console.log("Server Failed");
  } else {
    console.log(`Server Started on port ${port}`);
  }
});
