import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrected import
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectRoutes = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means checking
  const [isLoading, setIsLoading] = useState(true); // for showing loading state
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const verifyUser = async () => {
    setIsLoading(true);
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")); // Retrieve user info from localStorage
      if (!userInfo) {
        setIsAuthenticated(false); // No user info, user is not authenticated
        setIsLoading(false);
        return;
      }

      const decodedToken = jwtDecode(userInfo.token); // Decode the JWT to get user info
      if (decodedToken && decodedToken.id) {
        setIsAdmin(true);
        setIsAuthenticated(true); // User is authenticated
      } else {
        navigate("/");
        setIsAuthenticated(false); // If the token is invalid
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      navigate("/");
      setIsAuthenticated(false); // Error in verification, assume not authenticated
    } finally {
      setIsLoading(false); // Set loading state to false after verification is done
    }
  };

  useEffect(() => {
    verifyUser(); // Trigger user verification when component mounts
  }, []);

  // While verification is happening, we can show a loading spinner or nothing
  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner component
  }

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the children (the protected route)
  return children;
};

export default ProtectRoutes;
