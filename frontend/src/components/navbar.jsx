import { Link } from "react-router-dom";
import styles from "../styles/styles";

export default function Navbar({ isLoggedIn, handleLogout }) {
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
