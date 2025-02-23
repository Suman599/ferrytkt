import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import styles from "../styles/styles.js";
import { API_URL } from "../utils/api";

function BookTicket() {
  const [route, setRoute] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isBooking, setIsBooking] = useState(false); // Prevents multiple taps
  const navigate = useNavigate();

  const routePrices = {
    "Dakhineswar-Belur Math": 10,
    "Konnagar-Panihati": 8,
    "Barrackpore-Serampore": 7,
    "Barrackpore-Seoraphuli": 6,
    "Belur Math-Dakhineswar": 10,
    "Panihati-Konnagar": 8,
    "Serampore-Barrackpore": 7,
    "Seoraphuli-Barrackpore": 6,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isBooking) return; // Prevents multiple taps
    setIsBooking(true);
    setError("");
    setSuccess("");
    setQrCode(null);

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("Please log in to book a ticket");
        setIsBooking(false);
        return;
      }

      const response = await fetch(`${API_URL}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, route, quantity }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Ticket booked successfully");
        const qrData = JSON.stringify({
          ticketId: data.ticket.id,
          route: data.ticket.route,
          quantity: data.ticket.quantity,
          userId,
        });
        setQrCode(qrData);
        setTimeout(() => navigate("/tickets"), 5000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(`Error booking ticket: ${error.message}`);
    } finally {
      setIsBooking(false); // Enable button again
    }
  };

  const handleRouteChange = (e) => {
    setRoute(e.target.value);
    const price = routePrices[e.target.value] || 0;
    setTotalPrice(price * quantity);
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    setQuantity(quantity);
    const price = routePrices[route] || 0;
    setTotalPrice(price * quantity);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Book a Ferry Ticket</h2>
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>{success}</div>}

      <select value={route} onChange={handleRouteChange} required style={styles.select}>
        <option value="">Select Route</option>
        <option value="Dakhineswar-Belur Math">Dakhineswar-Belur Math (₹10)</option>
        <option value="Konnagar-Panihati">Konnagar-Panihati (₹8)</option>
        <option value="Barrackpore-Serampore">Barrackpore-Serampore (₹7)</option>
        <option value="Barrackpore-Seoraphuli">Barrackpore-Seoraphuli (₹6)</option>
        <option value="Belur Math-Dakhineswar">Belur Math-Dakhineswar (₹10)</option>
        <option value="Panihati-Konnagar">Panihati-Konnagar (₹8)</option>
        <option value="Serampore-Barrackpore">Serampore-Barrackpore (₹7)</option>
        <option value="Seoraphuli-Barrackpore">Seoraphuli-Barrackpore (₹6)</option>
      </select>

      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        max="4"
        required
        style={styles.input}
      />

      <div style={{ marginTop: "10px", fontSize: "18px", color: "#333" }}>
        <strong>Total Price: ₹{totalPrice}</strong>
      </div>

      <button type="submit" style={styles.button} disabled={isBooking}>
        {isBooking ? "Booking..." : "Book Ticket"}
      </button>

      {qrCode && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3>Your Ticket QR Code</h3>
          <QRCodeSVG value={qrCode} size={256} />
          <p>Please save this QR code. You'll need it to board the ferry.</p>
        </div>
      )}
    </form>
  );
}

export default BookTicket;
