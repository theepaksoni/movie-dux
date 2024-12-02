import React from "react";
import { useLocation } from "react-router-dom";
import "../styles.css";

const ErrorPage = () => {

    const location = useLocation(); // Get the current location (invalid path)

  // List of valid paths
  const validPaths = ["/", "/watchlist"];

  return (
    <div className="error-page-container">
    <h1>404 - Page Not Found</h1>
    <p>
      The path <strong>{location.pathname}</strong> is not a valid route.
    </p>
    <h2>Valid Paths:</h2>
     
    <ul>
      {validPaths.map((path, index) => (
        <li className="filter-slot" key={index}>{path}</li>
      ))}
    </ul>
  </div>
  );
};

export default ErrorPage;