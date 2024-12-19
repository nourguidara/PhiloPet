import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import AdminNavigationBar from './AdminNavigationBar';
import { jwtDecode } from 'jwt-decode';

function Header() {
  const [role, setRole] = useState(null);  // State to store the user role

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("token");  // Get the token from localStorage

        if (token) {
          // Decode the token to get the user ID
          const decoded = jwtDecode(token);
          const userId = decoded.id;

          // Fetch user details (including role) from the backend
          const response = await axios.get(`http://localhost:8000/api/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`  // Send the token as Authorization header
            }
          });

          // Log the response and update the state with the user role
          console.log("Fetched user details:", response.data);
          setRole(response.data.user.role);  // Set the fetched user role
          localStorage.setItem("role", response.data.user.role);  // Save role to localStorage
        }
      } catch (err) {
        console.error("Error fetching user role:", err);
        setRole(null);  // If there's an error, clear the role
      }
    };

    fetchUserRole();  // Call the function to fetch user role on component mount
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div>
      {role === "admin" ? <AdminNavigationBar /> : <NavigationBar />}
    </div>
  );
}

export default Header;
