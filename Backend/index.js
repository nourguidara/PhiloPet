// const express = require("express");
// const app = express();

// const port=8000;
// app.listen(port, (error)=>{
// if(error){console.log("Server Failed")}
// else{ console.log(`Server Started on port ${port}`)}
// })
// app.use(express.json());


// const dogs = [{
//   id: 1,
//   name: "Max",
//   breed: "Bulldog",
//   location: "Los Angeles, CA",
//   images: [],
//   description: "Loyal and strong.",
//   features: [
//     'Can live with other dogs' ,
//     'Can live with other cats' ,
//     'Friendly with children and babies' ,
//   ],
//   contact: "51087333",
//   createdAt: "2024-12-01T10:00:00Z"
// },
// {
//   id: 2,
//   name: "Bella",
//   breed: "Poodle",
//   location: "San Francisco, CA",
//   images: [],
//   description: "Friendly and intelligent.",
//   features: [
//     'Can live with other dogs' ,
//     'Can live with other cats' ,
//     'Friendly with children and babies' ,
//     'Microchipped' ,
//     'House-trained' ,
//   ],
//   contact: "51087253",
//   createdAt: "2024-12-02T11:00:00Z"
// }];

// const { formatDistanceToNow } = require("date-fns");

// function getPosted(createdAt) {
//   return formatDistanceToNow(new Date(createdAt), { addSuffix: true });
// }

// // GET: Fetch all dogs
// app.get("/dogs", (req, res) => {
//   const enrichedDogs = dogs.map(dog => ({
//       ...dog,
//       posted: getPosted(dog.createdAt), // Add dynamically calculated field
//   }));
//   res.status(200).json(enrichedDogs);
// });

// app.get("/dogs/:id", (req, res) => {
//   const dogId = req.params.id;  // Get the dog ID from the URL parameter
//   const foundDog = dogs.find((dog) => dog.id == dogId);  // Find the dog by ID
  
//   if (!foundDog) {
//       // If dog is not found, send a 404 response
//       res.status(404).json({ msg: "Dog not found" });
//   } else {
//       // If dog is found, send the dog data with a 200 response
//       res.status(200).json({ foundDog: foundDog });
//   }
// });

// // POST: Add a new dog
// app.post("/dogs", (req, res) => {
//   const dog = req.body;

//   if (!dog.name || !dog.breed || !dog.location) {
//       return res.status(400).json({ message: "Name, breed, and location are required." });
//   }

//   const newDog = {
//       id: dogs.length + 1,
//       ...dog,
//       createdAt: new Date().toISOString(),
//   };

//   // Using let so you can reassign the dogs array
//   dogs.push(newDog);

//   res.status(200).json({ message: "Dog Successfully Added", dogs });
// });




// // PUT: Update an existing dog
// app.put("/dogs/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, breed, location, images, description, features, contact } = req.body;

//   const dogIndex = dogs.findIndex(dog => dog.id === parseInt(id));

//   if (dogIndex === -1) {
//       return res.status(404).json({ error: "Dog not found." });
//   }

//   const updatedDog = {
//       ...dogs[dogIndex],
//       name: name || dogs[dogIndex].name,
//       breed: breed || dogs[dogIndex].breed,
//       location: location || dogs[dogIndex].location,
//       contact: contact || dogs[dogIndex].contact,
//       images: images || dogs[dogIndex].images,
//       description: description || dogs[dogIndex].description,
//       features: features || dogs[dogIndex].features,
      
//   };

//   dogs[dogIndex] = updatedDog;

//   res.status(200).json({ message:"Dog Successfully Updated"
//     ,updatedDog: updatedDog })
  
// });

// // DELETE: Remove a dog by ID
// app.delete("/dogs/:id", (req, res) => {
//   const { id } = req.params;
//   const dogIndex = dogs.findIndex(dog => dog.id === parseInt(id));

//   if (dogIndex === -1) {
//       return res.status(404).json({ error: "Dog not found." });
//   }

//   dogs.splice(dogIndex, 1); // Remove the dog from the array
//   res.status(204).send(); // Respond with no content
// });


const express=require("express");
const app=express();
const dogRoute=require("./Routes/dogRoute")
const connectDb=require('./Configuration/connectDb')

const dotenv=require("dotenv")
dotenv.config();
const port=process.env.PORT;
connectDb();

app.listen(port, (error)=>{
if(error){console.log("Server Failed")}
else{ console.log(`Server Started on port ${port}`)}
});
app.use(express.json());
app.use("/api", dogRoute);