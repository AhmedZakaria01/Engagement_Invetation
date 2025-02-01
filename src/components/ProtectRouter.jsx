import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Auth/Login";

const ProtectRouter = ({ children }) => {
  // Check if the user is authenticated, e.g., check localStorage or context
  const isAuthenticated = sessionStorage.getItem("authToken"); // Or use context or redux state for this
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/messageViewer");
    } else {
      navigate("/private-login");
    }
  }, [navigate, isAuthenticated]);

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    // return <Navigate to="/messageViewer"/>;
    // return navigate("/messageViewer");
  }

  // If authenticated, render the children (the protected route)
  // return <Login />;
};

export default ProtectRouter;
