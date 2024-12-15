const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Dog schema
const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of strings for image URLs
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String], // Array of strings for features
    default: [],
  },
  contact: {
    type: String,
    required: true,
  },
  fees: {
    type: Number, // Fee amount (optional, can be omitted when adding a dog)
    required: false,
    default: 0,
  },
  age: {
    type: Number, // Age in years (required)
    required: true,
  },
  sex: {
    type: String, // "Male" or "Female"
    required: true,
    enum: ["Male", "Female"], // Restrict to only these two options
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the record is created
  },
});

// Create the Dog model
const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
