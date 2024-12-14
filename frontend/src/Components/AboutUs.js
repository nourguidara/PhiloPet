import React from 'react';
import NavigationBar from '../Components/NavigationBar'; // Import the NavigationBar component
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
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

      {/* Contact Information and Form Section */}
      <div className="contact-section">
        <div className="contact-info">
          <h5>Philopet is a platform for all things pets—shop quality supplies, adopt your next companion, or rehome a pet in need. We’re dedicated to creating a compassionate community that supports pet lovers and their furry friends.</h5>
          <br></br>
          <br></br>
          <h3>contact information </h3>
          
          <p>Email: contact@gmail.tn</p>
          <p>Adresse: 41, rue El Adlot, Cité ennasr 2, La Soukra, Tunisie</p>
          <p>Téléphone: (+216) 00000000</p>
        </div>
        <form className="contact-form">
          <h3>Contact Us</h3>
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="text" placeholder="subject" className="form-input" />
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <div className="captcha-section">
            <input type="checkbox" id="captcha" name="captcha" />
            <label htmlFor="captcha"> I am not a robot</label>
          </div>
          <button type="submit" className="submit-button"> send</button>
        </form>
      </div>

      
    </div>
  );
};

export default AboutUs;
