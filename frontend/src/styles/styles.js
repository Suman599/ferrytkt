const styles = {
    // Global Styles
    body: {
      margin: "0",
      padding: "0",
      overflowX: "hidden", // Prevent horizontal scrolling
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box", // Ensures padding and borders are included in the width/height
      width: "100%",
      height: "100%",
    },
    html: {
      width: "100%",
      height: "100%",
    },
  
    // Global Reset and Box Sizing
    "*": {
      boxSizing: "border-box", // Ensures all elements consider padding/borders in width/height
    },
    "*:before, *:after": {
      boxSizing: "inherit", // Inherit box-sizing property for pseudo-elements
    },
  
    // Container Styles
    container: {
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      minHeight: "100vh",
      width: "100%", // Ensure the container doesn't overflow
      boxSizing: "border-box",
      overflowX: "hidden", // Prevent horizontal overflow
    },
    nav: {
      width: "100%",
      backgroundColor: "#007BFF",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "center",
    },
    navList: {
      listStyle: "none",
      display: "flex",
      margin: "0",
      padding: "0",
    },
    navItem: {
      margin: "0 15px",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "18px",
      padding: "8px 12px",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    },
    navLinkHover: {
      backgroundColor: "#0056b3",
    },
  
    // Headings and Forms
    heading: {
      fontSize: "32px",
      color: "#333",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      margin: "20px 0",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
      boxSizing: "border-box",
    },
    select: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "18px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  
    // Ticket List
    ticketList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    },
    ticket: {
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "10px",
      width: "100%",
      maxWidth: "400px",
    },
    ticketImage: {
      marginTop: "10px",
      width: "100px",
      height: "100px",
    },
  
    // Error and Success
    error: {
      color: "red",
      marginBottom: "10px",
    },
    success: {
      color: "green",
      marginBottom: "10px",
    },
  
    // Hero Section
    heroSection: {
      backgroundImage: "url('/img/bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      padding: "0 30px",
      boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
      boxSizing: "border-box",
    },
    heroContent: {
      maxWidth: "600px",
    },
    heroHeading: {
      fontSize: "4rem",
      fontWeight: "700",
      marginBottom: "20px",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    },
    heroSubheading: {
      fontSize: "1.5rem",
      fontWeight: "300",
      marginBottom: "30px",
      lineHeight: "1.6",
      textShadow: "1px 1px 6px rgba(0, 0, 0, 0.4)",
    },
    heroButton: {
      backgroundColor: "#ff6f61",
      color: "#fff",
      fontSize: "1.25rem",
      padding: "15px 30px",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    heroButtonHover: {
      backgroundColor: "#e55b4d",
    },
  
    // Routes Section
    routesSection: {
      padding: "50px 20px",
      backgroundColor: "#f9f9f9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    routesHeading: {
      fontSize: "2.5rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "40px",
    },
    routesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "30px",
      width: "100%", // Ensures grid does not overflow horizontally
    },
    routeCard: {
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      padding: "20px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    routeCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    },
    routeImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    routeTitle: {
      fontSize: "1.5rem",
      fontWeight: "500",
      color: "#333",
      marginBottom: "10px",
    },
    routeDetails: {
      fontSize: "1.2rem",
      color: "#777",
      marginBottom: "20px",
    },
    routeButton: {
      backgroundColor: "#ff6f61",
      color: "#fff",
      padding: "12px 25px",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    routeButtonHover: {
      backgroundColor: "#e55b4d",
    },
  
    // About Section
    aboutSection: {
      padding: "50px 20px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    },
    aboutHeading: {
      fontSize: "2.5rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "20px",
    },
    aboutText: {
      fontSize: "1.2rem",
      color: "#555",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.8",
    },
  
    // Testimonial Section
    testimonialsSection: {
      padding: "50px 20px",
      backgroundColor: "#f2f2f2",
      textAlign: "center",
    },
    testimonialsHeading: {
      fontSize: "2.5rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "40px",
    },
    testimonialsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    },
    testimonialCard: {
      backgroundColor: "#fff",
      width: "280px",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    testimonialImage: {
      borderRadius: "50%",
      width: "80px",
      height: "80px",
      margin: "0 auto 20px",
      objectFit: "cover",
    },
    testimonialText: {
      fontSize: "1rem",
      color: "#777",
      fontStyle: "italic",
    },
    testimonialName: {
      fontSize: "1.1rem",
      fontWeight: "500",
      color: "#333",
      marginTop: "10px",
    },
  
    // Footer
    footer: {
      padding: "20px",
      backgroundColor: "#007BFF",
      color: "#fff",
      textAlign: "center",
      position: "relative",
      bottom: "0",
      width: "100%",
    },
  
    // Media Queries for responsiveness
    "@media (max-width: 768px)": {
      heading: {
        fontSize: "28px",
      },
      button: {
        fontSize: "16px",
      },
      heroHeading: {
        fontSize: "2.5rem",
      },
      heroSubheading: {
        fontSize: "1rem",
      },
      ticketList: {
        marginTop: "10px",
      },
      routesHeading: {
        fontSize: "2rem",
      },
      routesGrid: {
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      routeCard: {
        padding: "15px",
      },
      footer: {
        padding: "15px",
      },
    },
  };
  
  export default styles;
  