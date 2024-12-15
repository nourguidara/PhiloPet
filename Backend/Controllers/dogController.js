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
  const { name, breed, location, images, description, features, contact, fees, sex, age } = req.body;

  // Check required fields
  if (!name || !breed || !location) {
    return res.status(400).json({ msg: "Name, breed, and location are required." });
  }

  try {
    // Check if a dog with the same name and location already exists
    const foundDog = await Dog.findOne({ name, location });
    if (foundDog) {
      return res.status(400).json({ msg: "A dog with the same name and location already exists." });
    }

    // Create a new dog instance
    const newDog = new Dog({
      name,
      breed,
      location,
      fees,
      sex,
      age,
      images: images || [],
      description,
      features: features || [],
      contact,
      createdAt: new Date().toISOString(),
    });

    console.log(newDog); // Log the new dog instance (optional for debugging)

    // Save the new dog to the database
    await newDog.save();

    // Respond with the newly added dog
    res.status(200).json({ dog: newDog, msg: "Dog successfully added" });
  } catch (error) {
    console.error("Error adding dog:", error); // Log the error for debugging
    res.status(500).json({ msg: "Error on adding dog" });
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
