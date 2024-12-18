// import React from "react";
// import { Navigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // Correctly import using named export

// const ProtectedRoute = ({ children, roles }) => {
//   const token = localStorage.getItem("token");

//   if (!token) return <Navigate to="/login" />;

//   try {
//     const decodedToken = jwtDecode(token);
//     if (!roles.includes(decodedToken.role)) {
//       return <Navigate to="/" />; // Redirect if the role is not allowed
//     }
//     return children;
//   } catch (error) {
//     console.error("Invalid token:", error);
//     return <Navigate to="/login" />;
//   }
// };

// export default ProtectedRoute;
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // Correctly import using named export

// const ProtectedRoute = ({ children, roles }) => {
//   const token = localStorage.getItem("token");

//   if (!token) return <Navigate to="/login" />;

//   try {
//     const decodedToken = jwtDecode(token);
//     if (!roles.includes(decodedToken.role)) {
//       return <Navigate to="/" />; // Redirect if the role is not allowed
//     }
//     return children;
//   } catch (error) {
//     console.error("Invalid token:", error);
//     return <Navigate to="/login" />;
//   }
// };

// export default ProtectedRoute;

import React from "react";

import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // Pass the current path as the "from" state
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};


export default ProtectedRoute;

