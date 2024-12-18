

// import React, { useState } from 'react';
// // import api from '../services/api'; // Import Axios instance
// import axios from "axios";

// import { Link } from 'react-router-dom'; // Import Link component
// import './SignUp.css';

// function SignUp() {
//   const [formData, setFormData] = useState({
//     userName: "",
// email: "",
// age: "",
// password: "",
    
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post( "http://localhost:8000/api/users", formData); // POST to backend
//       alert('Signup successful');
//     } catch (error) {
//       console.error('Signup failed:', error.response?.data || error);
//       alert(error.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="signup">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="userName"
//             placeholder="Enter your username"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Age</label>
//           <input
//             type="text"
//             name="age"
//             placeholder="Enter your age"
//             onChange={handleChange}
//           />
//         </div>
        
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             onChange={handleChange}
//           />
//         </div>

        
//         <button className="submit-button" type="submit">
//           Sign Up
//         </button>
//       </form>

//       <div className="create-account-section">
//         <p>Already have an account? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    age: "",
    password: "",
  });

  const [userRole, setUserRole] = useState(""); // State to store the role

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data being sent:", formData);  // Debugging form data
  
    try {
      const response = await axios.post("http://localhost:8000/api/users", formData); // POST to backend
  
      // Extract role from the response if provided
      const { user, msg } = response.data;
      alert(`${msg}. Your role is: ${user.role}`); // Notify user with their role
      setUserRole(user.role); // Optionally update state to reflect the role
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error);
      alert(error.response?.msg || 'Signup failed');
    }
  };
  

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            name="age"
            placeholder="Enter your age"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        <button className="submit-button" type="submit">
          Sign Up
        </button>
      </form>

      {/* Display role after signup */}
      {userRole && (
        <div className="role-notification">
          <p>Your role is: <strong>{userRole}</strong></p>
        </div>
      )}

      <div className="create-account-section">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
