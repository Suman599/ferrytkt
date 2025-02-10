import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/styles";
import { API_URL } from "../utils/api";


export default function Signup() {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (response.ok) {
        // Automatically log in the user by saving the userId in localStorage
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/"); // Redirect to home after successful signup
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
}
