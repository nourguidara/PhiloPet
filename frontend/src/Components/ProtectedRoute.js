

// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children, adminOnly = false }) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // Assuming the role is stored in localStorage after login
//   const location = useLocation();

//   // If no token, redirect to login with the current location saved in state
//   if (!token) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   // If the route is admin-only and the user is not an admin, redirect to the homepage
//   if (adminOnly && role !== "admin") {
//     return <Navigate to="/" />;
//   }

//   // If the user is authorized, render the children components
//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { UserRole} from "./UserRole";
function ProtectedRoute({ children, allowedRoles }) {
const role = UserRole();
console.log(role)
if (role) {
return (
<div>
{allowedRoles.includes(role) ? children:<Navigate to="/" /> }
</div>)
}
else {
// No valid token or role, redirect to the login page
return <Navigate to="/signIn" />; // Adjust the redirect route as needed
}
}
export default ProtectedRoute;