// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phoneNumber: { type: String,  },
//   role: { type: String, enum: ["user", "admin"],default: "user"  }, // Role field

// });

// module.exports = mongoose.model("User", userSchema);

var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
userName: {
type: String,
required: true,
},
email: {
type: String,
required: true,
},
age: {
type: String,
required: true,
},
password: {
type: String,
required: true},

role: {
type: String,
enum: ['user', 'admin'], // Allowed roles
default: 'user' // Default role
}
},
);
module.exports=mongoose.model('user',userSchema)