const express = require("express");
const petRoute = express.Router();
const upload = require("../middlewares/multer");

const {
  getPets,
  getOnePet,
  postPet,
  putPet,
  deletePet,
} = require("../Controllers/petController");

// Route definitions
petRoute.get("/pets", getPets);
petRoute.get("/pets/:id", getOnePet);
petRoute.post("/pets", upload.array("images", 3), postPet);
petRoute.put("/pets/:id", putPet);
petRoute.delete("/pets/:id", deletePet);

module.exports = petRoute;
