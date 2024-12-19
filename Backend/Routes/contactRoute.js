const express = require("express");
const router = express.Router();
const { submitContactMessage, getAllMessages, deleteMessage } = require("../Controllers/contactController");

router.post("/", submitContactMessage);  // POST for submitting a contact message
router.get("/admindashboard", getAllMessages);   // GET for fetching all contact messages (for admin)
router.delete("/admindashboard/:id", deleteMessage);  // DELETE for deleting a specific contact message by ID

module.exports = router;
