import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page after login
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.navLink}>Login</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/signup" style={styles.navLink}>Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li style={styles.navItem}>
              <Link to="/book" style={styles.navLink}>Book Ticket</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/tickets" style={styles.navLink}>My Tickets</Link>
            </li>
            <li style={styles.navItem}>
              <span onClick={handleLogout} style={{ ...styles.navLink, cursor: "pointer" }}>
                Logout
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
