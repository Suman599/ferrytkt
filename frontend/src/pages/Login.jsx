import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/api";
import styles from "../styles/styles";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("userId", data.userId);
        setIsLoggedIn(true);
        alert("Logged in successfully");
        navigate("/");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={styles.input} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={styles.input} />
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
}
