const express = require("express");
const dogRoute = express.Router();


const {
getDogs,
postDog,
putDog,
deleteDog,
getOneDog,
} = require("../Controllers/dogController");
// Route definitions
dogRoute.get("/dogs", getDogs);
dogRoute.get("/dogs/:id", getOneDog);
dogRoute.post("/dogs", postDog);
dogRoute.put("/dogs/:id", putDog);
dogRoute.delete("/dogs/:id", deleteDog);
module.exports = dogRoute;
