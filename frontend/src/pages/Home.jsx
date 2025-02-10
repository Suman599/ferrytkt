import React from "react";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate(); // Initialize the useNavigate hook

  const booking = () => {
    navigate("/book"); // Navigate to the About page (same as clicking the 'About' tab in Navbar)
  };

  return (
    <div>
    
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>Welcome to the Ferry Ticket Booking System</h1>
          <p style={styles.heroSubheading}>A hassle-free, comfortable ferry booking experience. Get your tickets in minutes!</p>
          <button style={styles.heroButton} onClick={booking} >Start Booking</button>
        </div>
      </section>

      {/* Ferry Routes Section */}
      <section style={styles.routesSection}>
        <h2 style={styles.routesHeading}>Popular Ferry Routes</h2>
        <div style={styles.routesGrid}>
          {/* Route Card 1 */}
          <div style={styles.routeCard}>
            <img src="/img/dakhineswar.jpg" alt="Route 1" style={styles.routeImage} />
            <h3 style={styles.routeTitle}>Dakhineswar–Belur Math</h3>
            <p style={styles.routeDetails}>₹10 | 15 minutes</p>
            <button style={styles.routeButton} onClick={booking}>Book Now</button>
          </div>
          {/* Route Card 2 */}
          <div style={styles.routeCard}>
            <img src="/img/konnagar.jpg" alt="Route 2" style={styles.routeImage} />
            <h3 style={styles.routeTitle}>Konnagar– Panihati</h3>
            <p style={styles.routeDetails}>₹8 | 7 minutes</p>
            <button style={styles.routeButton} onClick={booking}>Book Now</button>
          </div>
          {/* Route Card 3 */}
          <div style={styles.routeCard}>
            <img src="/img/seram.jpg" alt="Route 3" style={styles.routeImage} />
            <h3 style={styles.routeTitle}>Barrackpore–Serampore</h3>
            <p style={styles.routeDetails}>₹7 | 10 minutes</p>
            <button style={styles.routeButton} onClick={booking}>Book Now</button>
          </div>
          {/* Route Card 4 */}
          <div style={styles.routeCard}>
            <img src="/img/seora.jpg" alt="Route 4" style={styles.routeImage} />
            <h3 style={styles.routeTitle}>Barrackpore–Seoraphuli</h3>
            <p style={styles.routeDetails}>₹6 | 10 minutes</p>
            <button style={styles.routeButton} onClick={booking}>Book Now</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <h2 style={styles.aboutHeading}>Why Choose Our Ferry Service?</h2>
        <p style={styles.aboutText}>
          We offer the most affordable and reliable ferry services. Skip the traffic and enjoy a smooth, scenic journey across the river. Our fleet is well-maintained, punctual, and ready to serve you.
        </p>
      </section>

      {/* Testimonial Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.testimonialsHeading}>What Our Customers Say</h2>
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>“An amazing experience! The booking process was so simple, and the ferry ride was scenic and enjoyable.”</p>
            <p style={styles.testimonialAuthor}>- Sarla Singh</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>“The customer service was great, and I loved the punctuality of the ferry service. Highly recommend!”</p>
            <p style={styles.testimonialAuthor}>- Arush Chakraborty</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2025 Ferry Ticket Booking. All Rights Reserved.</p>
          
        </div>
      </footer>
    </div>
  );
}
