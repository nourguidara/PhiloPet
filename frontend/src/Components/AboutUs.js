import React, { useState } from "react";
import axios from "axios";
import "./AboutUs.css";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to the backend API
      const response = await axios.post("http://localhost:8000/api/contact", formData);

      // Show success message
      alert(response.data.message || "Message sent successfully!");

      // Reset the form data
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="about-us-container">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.123456789!2d10.123456!3d36.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12345abcd1234!2sLocation+Name!5e0!3m2!1sen!2s!4v1684263518098!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-info">
          <h5>Philopet is a platform for all things pets—shop quality supplies, adopt your next companion, or rehome a pet in need.</h5>
          <h3>Contact Information</h3>
          <p>Email: contact@gmail.tn</p>
          <p>Address: 41, rue El Adlot, Cité ennasr 2, La Soukra, Tunisie</p>
          <p>Phone: (+216) 00000000</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
          <div className="captcha-section">
            <input type="checkbox" id="captcha" name="captcha" />
            <label htmlFor="captcha"> I am not a robot</label>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
