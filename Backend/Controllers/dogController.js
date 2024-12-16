const Dog = require("../models/Dog");

const { formatDistanceToNow } = require("date-fns");


// Helper function to format time since the dog was posted
function getPosted(createdAt) {
  return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
}

// GET: Fetch all dogs
const getDogs = async (req, res) => {
  try {
    const dogs = await Dog.find(); // Fetch all dogs from the database
    if (dogs && dogs.length > 0) {
      const enrichedDogs = dogs.map((dog) => ({
        ...dog.toObject(), // Convert Mongoose document to plain object
        posted: getPosted(dog.createdAt), // Add dynamically calculated field
      }));
      res.status(200).json({ dogs: enrichedDogs });
    } else {
      res.status(404).json({ msg: "No dogs found" });
    }
  } catch (error) {
    console.error("Error fetching dogs:", error);
    res.status(500).json({ msg: "Error fetching dogs" });
  }
};

// GET: Fetch a single dog by ID
const getOneDog = async (req, res) => {
  const id = req.params.id;
  try {
    const foundDog = await Dog.findById(id); 
    if (foundDog) {
      res.status(200).json({ dog: foundDog }); 
    } else {
      res.status(404).json({ msg: "No dog found with the given ID" }); 
    }
  } catch (error) {
    console.error("Error retrieving dog:", error); 
    res.status(500).json({ msg: "Error on retrieving the dog" }); 
  }
};

// POST: Add a new dog
const postDog = async (req, res) => {
  try {
    // Add images to the body
    const images = req.files.map((file) => file.path);
    
    // Create a new dog object with req.body and images included
    const newDog = new Dog({
      ...req.body,
      images,  // Adding images to the dog object
    });

    // Save the new dog to the database
    await newDog.save();
    res.status(200).json({ dog: newDog, msg: "Dog successfully added" });
  } catch (error) {
    console.error("Error adding dog:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ msg: "Validation Error", errors: messages });
    }

    res.status(500).json({ msg: "Server error occurred" });
  }
};



// PUT: Update an existing dog
const putDog = async (req, res) => {
  const id = req.params.id; // Get the dog ID from the URL parameter
  const dogUpdates = req.body; // Get the updated data from the request body

  try {
    // Find the dog by ID and update it with the new data
    const updatedDog = await Dog.findByIdAndUpdate(id, dogUpdates, { new: true });

    if (!updatedDog) {
      return res.status(404).json({ msg: "Dog not found" });
    }

    res.status(200).json({ msg: "Dog Successfully Updated", updatedDog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error on updating dog" });
  }
};

// DELETE: Remove a dog by ID
const deleteDog = async (req, res) => {
  const id = req.params.id; // Get the dog ID from the URL parameter

  try {
    // Find the dog by ID and delete it
    const deletedDog = await Dog.findByIdAndDelete(id);

    if (!deletedDog) {
      return res.status(404).json({ msg: "Dog not found" });
    }

    res.status(200).json({ msg: "Dog Successfully Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error on deleting dog" });
  }
};

module.exports = { getDogs, postDog, putDog, deleteDog, getOneDog };
