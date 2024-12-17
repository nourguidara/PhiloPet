const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Pet schema (for both dogs and cats)
const petSchema = new Schema({
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
    type: Number, // Fee amount (optional, can be omitted when adding a pet)
    required: false,
    default: 'free',
  },
  age: {
    type: String, // Age in years (required)
    required: true,
  },
  sex: {
    type: String, // "Male" or "Female"
    required: true,
    // enum: ["Male", "Female"], // Restrict to only these two options
  },
  species: {
    type: String,
    enum: ["dog", "cat"], // Ensure the pet is either a dog or cat
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the record is created
  },
});

// Create the Pet model
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
