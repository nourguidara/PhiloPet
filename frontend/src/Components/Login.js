
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

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
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", user);
      const token = response.data.token;
      

      // Store token and role in localStorage
      localStorage.setItem("token", token);
     
      if(response.data.user.role==='user'){ navigate('/');}
  else{navigate('/admindashboard')}


      
     

      alert("Login successful");
    
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
            value={user.email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={user.password}
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

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import jwt_Decode from "jwt-decode"; // Removed the incorrect import

// import "./Login.css";

// function Login() {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle input changes
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const from = location.state?.from?.pathname || "/";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/login", user);
//       const token = response.data.token;
//       localStorage.setItem("token", token);
      
//       // Decode the token to get the role
//       const decodedToken = jwtDecode(token);
//       if (decodedToken.role === 'user') {
//         navigate('/');
//       } else {
//         navigate('/admindashboard');
//       }

//       alert("Login successful");
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
//             value={user.email}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             onChange={handleChange}
//             value={user.password}
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

