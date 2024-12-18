const Contact = require("../models/Contact");

const submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newMessage = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Error saving message" });
  }
};

// Get all messages for the admin
const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find(); // Retrieve all contact messages
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ message: "Error retrieving messages" });
  }
};

// Delete a message by ID
const deleteMessage = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Contact.findByIdAndDelete(id); // Find and delete the message
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ message: "Error deleting message" });
  }
};

module.exports = { submitContactMessage, getAllMessages, deleteMessage };
