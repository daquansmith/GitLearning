// Import React and React Router
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Define a custom component for the login page
function LoginPage() {
  // Use state hooks to store the username and password entered by the user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Use history hook to navigate to other pages
  const history = useHistory();

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default browser behavior of reloading the page
    event.preventDefault();

    // For simplicity, assume that the username and password are both "admin"
    // In a real app, you would need to validate the credentials with a backend service
    if (username === "admin" && password === "admin") {
      // If the credentials are valid, redirect to the home page
      history.push("/");
    } else {
      // If the credentials are invalid, show an alert message
      alert("Invalid username or password");
    }
  };

  // Return the JSX code for rendering the login page
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Export the component for use in other files
export default LoginPage;
