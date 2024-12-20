
const jwt = require("jsonwebtoken");
require('dotenv').config();

const login = async (req, res) => {
  const user = req.body;
try {
const foundUser = await User.findOne({ email: user.email });
if (foundUser) {
if (user.password === foundUser.password) {
const token = jwt.sign(
{ id: foundUser._id, role: foundUser.role },
process.env.JWT_SECRET
);
res.status(200).json({ user: foundUser, token: token });
} else {
res.status(400).json({ msg: "Wrong password" });
}
} else {
return res.status(400).json({ msg: "User not registered" });
}
} catch (error) {
console.error(error);
res.status(500).json({ msg: "Server error" });
}

};


const User = require("../models/User");
const getUsers = async (request, response) => {
try {
const users = await User.find();
if (users && users.length > 0) {
response.status(200).json({ users: users });
} else {
response.status(404).json({ msg: "No users found" });
}
} catch (error) {
console.error(error);
response.status(500).json({ msg: "Error on getting users" });
}
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
  const foundUser = await User.findById(id);
  if (foundUser) {
  res.status(200).json({ user: foundUser });
  } else {
  res.status(404).json({ msg: "No user found with the given ID" });
  }
  } catch (error) {
  res.status(500).json({ msg: "Error on retrieving the user" });
  }
  };

  const postUser = async (request, response) => {
    const user = request.body;
    console.log("Request body:", user);
  
    try {
      // Check if the user already exists
      const foundUser = await User.findOne({ email: user.email });
      if (foundUser) {
        return response.status(400).json({ msg: "User already exists" });
      }
  
      // Ensure email is lowercase to check for @admin, trim extra spaces
      const email = user.email.trim().toLowerCase();
      const role = email.includes("@admin") ? "admin" : "user";
  
      // Create a new user object with the role
      const newUser = new User({
        ...user,
        email, // Ensure email is trimmed and standardized
        role,  // Assign role
      });
  
      console.log("New User:", newUser);
  
      // Save the new user to the database
      await newUser.save();
  
      // Return success response
      response.status(200).json({ user: newUser, msg: "User successfully added" });
    } catch (error) {
      console.error("Error on adding user:", error.message);
      response.status(500).json({ msg: "Error on adding user", error: error.message });
    }
  };
  
  

  const putUser = async (req, res) => {
    const id=req.params.id;
    const user=req.body
    console.log(user)
    try {
    await User.findByIdAndUpdate(id,user)
    res.status(200).json({ msg: "update success" });
    } catch (error) {
    res.status(500).json({ msg: "error on updating user" });
    }
    };
    const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
    await User.findByIdAndDelete(id)
    res.status(200).json({ msg: "delete done" });
    } catch (error) {
    res.status(500).json({ msg: "error on deleting user" });
    }
    };
    module.exports = { getUsers, postUser, putUser, deleteUser, getOneUser, login };
    