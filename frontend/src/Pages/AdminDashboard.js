import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  // Fetch messages from the backend when the component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/contact/admindashboard");
        setMessages(response.data); 
      } catch (error) {
        console.error("Error fetching messages:", error);
        alert("Error fetching messages from the backend.");
      }
    };

    fetchMessages(); // Call the function to fetch messages
  }, []);

  // Function to handle message deletion
  const handleDelete = async (messageId) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`http://localhost:8000/api/contact/admindashboard/${messageId}`);
        setMessages(messages.filter((message) => message._id !== messageId)); // Remove the deleted message from the state
        alert("Message deleted successfully.");
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Error deleting message.");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      
      <h3>Contact Messages</h3>

      {/* Display all messages */}
      <div>
        {messages.length === 0 ? (
          <p>No messages to display.</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#ffe5d7",
              }}
             
              
            >
              <p>
                <strong>Subject:</strong> {message.subject}
              </p>
              <p>
                <strong>Name:</strong> {message.name}
              </p>
              <p>
                <strong>Email:</strong> {message.email}
              </p>
              <p>
                <strong>Message:</strong> {message.message}
              </p>
              <p>
                <strong>Submitted At:</strong>{" "}
                {new Date(message.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(message._id)}
                style={{
                  backgroundColor: " #4c7f85",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
