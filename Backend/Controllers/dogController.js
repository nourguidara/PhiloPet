const { formatDistanceToNow } = require("date-fns");

let dogs = [
  {
    id: 1,
    name: "Max",
    breed: "Bulldog",
    sex: "male",
    age: "3",
    fees:"free",
    location: "Los Angeles, CA",
    images: [],
    description: "Loyal and strong.",
    features: [
      "Can live with other dogs",
      "Can live with other cats",
      "Friendly with children and babies",
    ],
    contact: "51087333",
    createdAt: "2024-12-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Bella",
    breed: "Poodle",
    location: "San Francisco, CA",
    sex: "male",
    age: "3",
    fees:"free",
    images: [],
    description: "Friendly and intelligent.",
    features: [
      "Can live with other dogs",
      "Can live with other cats",
      "Friendly with children and babies",
      "Microchipped",
      "House-trained",
    ],
    contact: "51087253",
    createdAt: "2024-12-02T11:00:00Z",
  },
];

// Helper function to format time since the dog was posted
function getPosted(createdAt) {
  return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
}

// GET: Fetch all dogs
const getDogs = (req, res) => {
  const enrichedDogs = dogs.map((dog) => ({
    ...dog,
    posted: getPosted(dog.createdAt), // Add dynamically calculated field
  }));
  res.status(200).json({ dogs: enrichedDogs });
};

// GET: Fetch a single dog by ID
const getOneDog = (req, res) => {
  const dogId = parseInt(req.params.id); // Get dog ID from URL parameter
  const foundDog = dogs.find((dog) => dog.id === dogId); // Find the dog by ID
  
  if (!foundDog) {
    return res.status(404).json({ msg: "Dog not found" });
  }
  
  // If dog is found, send the dog data with a 200 response
  res.status(200).json({ foundDog });
};

// POST: Add a new dog
const postDog = (req, res) => {
  const { name, breed, location, images, description, features, contact, fees,sex,age } = req.body;

  if (!name || !breed || !location) {
    return res.status(400).json({ message: "Name, breed, and location are required." });
  }

  const newDog = {
    id: dogs.length + 1,  // Generate a new ID based on the length of the current array
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
    createdAt: new Date().toISOString(), // Set the current time
  };

  dogs.push(newDog);  // Add the new dog to the array

  res.status(200).json({ message: "Dog Successfully Added", dogs });
};

// PUT: Update an existing dog
const putDog = (req, res) => {
  const { id } = req.params;
  const { name, breed, location, images, description, features, contact, fees, age, sex } = req.body;

  const dogIndex = dogs.findIndex((dog) => dog.id === parseInt(id));

  if (dogIndex === -1) {
    return res.status(404).json({ error: "Dog not found" });
  }

  const updatedDog = {
    ...dogs[dogIndex],
    name: name || dogs[dogIndex].name,
    breed: breed || dogs[dogIndex].breed,
    location: location || dogs[dogIndex].location,
    contact: contact || dogs[dogIndex].contact,
    fees: fees || dogs[dogIndex].fees,
    age: age || dogs[dogIndex].age,
    sex: sex || dogs[dogIndex].sex,
    images: images || dogs[dogIndex].images,
    description: description || dogs[dogIndex].description,
    features: features || dogs[dogIndex].features,
  };

  dogs[dogIndex] = updatedDog;

  res.status(200).json({ message: "Dog Successfully Updated", updatedDog });
};

// DELETE: Remove a dog by ID
const deleteDog = (req, res) => {
  const { id } = req.params;
  const dogIndex = dogs.findIndex((dog) => dog.id === parseInt(id));

  if (dogIndex === -1) {
    return res.status(404).json({ error: "Dog not found" });
  }

  dogs.splice(dogIndex, 1); // Remove the dog from the array
  res.status(204).send(); // Respond with no content
};

module.exports = { getDogs, postDog, putDog, deleteDog, getOneDog };
