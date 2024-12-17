const Pet = require("../models/Pet"); 
const { formatDistanceToNow } = require("date-fns");

// Helper function to format time since the pet was posted
function getPosted(createdAt) {
  return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
}

// GET: Fetch all pets (dogs and cats)
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find(); // Fetch all pets (both dogs and cats)
    if (pets && pets.length > 0) {
      const enrichedPets = pets.map((pet) => ({
        id: pet._id, // Explicitly include the MongoDB-generated _id as 'id'
        ...pet.toObject(), // Convert Mongoose document to plain object
        posted: getPosted(pet.createdAt), // Add dynamically calculated field
      }));
      res.status(200).json({ pets: enrichedPets });
    } else {
      res.status(404).json({ msg: "No pets found" });
    }
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ msg: "Error fetching pets" });
  }
};

// GET: Fetch a single pet by ID
const getOnePet = async (req, res) => {
  try {
    const petId = req.params.id; // Extract ID from request params

    // Validate the ID format (MongoDB ObjectID validation)
    if (!petId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ msg: 'Invalid pet ID format' });
    }

    // Query the database
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }

    // Return the pet data
    res.status(200).json({ pet });
  } catch (error) {
    console.error('Error fetching pet:', error.message);
    res.status(500).json({ msg: 'Server error occurred' });
  }
};

// POST: Add a new pet (dog or cat)
const postPet = async (req, res) => {
  try {
    // Handle images (multer stores uploaded files in req.files)
    const images = req.files ? req.files.map((file) => file.path) : [];

    // Extract form data from req.body
    const {
      name,
      breed,
      location,
      description,
      features,
      contact,
      fees,
      age,
      sex,
      species,
    } = req.body;

    // Validate required fields
    if (!name || !breed || !location || !description || !age || !sex || !species || !contact) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    // Ensure features is always an array, even if a single feature is provided
    const featureList = Array.isArray(features) ? features : [features];

    // Create a new pet document
    const newPet = new Pet({
      name,
      breed,
      location,
      images, // Store image paths
      description,
      features: featureList, // Store features array
      contact, // Only phone number, no email
      fees: fees || 0, // Default fee to 0 if not provided
      age,
      sex,
      species, // dog or cat
    });

    // Save the new pet to the database
    await newPet.save();

    // Respond with success
    res.status(201).json({ pet: newPet, msg: "Pet successfully added" });
  } catch (error) {
    console.error("Error adding pet:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ msg: "Validation Error", errors: messages });
    }

    // Handle other errors
    res.status(500).json({ msg: "Server error occurred" });
  }
};


// PUT: Update an existing pet (dog or cat)
const putPet = async (req, res) => {
  const id = req.params.id; // Get the pet ID from the URL parameter
  const petUpdates = req.body; // Get the updated data from the request body

  try {
    // Find the pet by ID and update it with the new data
    const updatedPet = await Pet.findByIdAndUpdate(id, petUpdates, { new: true });

    if (!updatedPet) {
      return res.status(404).json({ msg: "Pet not found" });
    }

    res.status(200).json({ msg: "Pet Successfully Updated", updatedPet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error on updating pet" });
  }
};

// DELETE: Remove a pet by ID
const deletePet = async (req, res) => {
  const id = req.params.id; // Get the pet ID from the URL parameter

  try {
    // Find the pet by ID and delete it
    const deletedPet = await Pet.findByIdAndDelete(id);

    if (!deletedPet) {
      return res.status(404).json({ msg: "Pet not found" });
    }

    res.status(200).json({ msg: "Pet Successfully Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error on deleting pet" });
  }
};

module.exports = { getPets, getOnePet, postPet, putPet, deletePet };
