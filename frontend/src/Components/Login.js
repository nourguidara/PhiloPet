// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import { useLocation } from "react-router-dom";

// function Login() {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   // Handle input changes
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/login", user); // POST to backend
//       const token = response.data.token;
//       const role = response.data.user.role; // Extract user role directly from the backend response

//       // Save token and role in localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);

//       alert("Login successful");

//       // Redirect based on the user's role
//       if (role === "admin") {
//         navigate("/admindashboard"); // Redirect to Admin Dashboard
//       } else {
//         navigate("/"); // Redirect to Homepage or User Dashboard
//       }
//     } catch (error) {
//       console.error("Login failed:", error.response?.data || error);
//       alert(error.response?.data?.msg || "Login failed");
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
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
//           Login
//         </button>
//       </form>

//       {/* Create Account Link */}
//       <div className="create-account-section">
//         <p>
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Login.css";


function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8000/api/login", user);
    const token = response.data.token;
    const role = response.data.user.role;

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    alert("Login successful");
    console.log("Token set in localStorage:", token);
    // Redirect to the original requested page or fallback
    if (role === "admin") {
      navigate("/admindashboard");
    } else {
      navigate(from); // Redirect to the original requested page
    }
  } catch (error) {
    console.error("Login failed:", error.response?.data || error);
    alert(error.response?.data?.msg || "Login failed");
  }
};

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>

      {/* Create Account Link */}
      <div className="create-account-section">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
