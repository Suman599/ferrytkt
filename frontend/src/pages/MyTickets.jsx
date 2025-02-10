import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "../styles/styles.js";

import { API_URL } from "../utils/api";

function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("Please log in to view your tickets");
      return;
    }

    fetch(`${API_URL}/tickets?userId=${userId}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tickets");
        }
        return res.json();
      })
      .then((data) => {
        if (data.tickets) {
          setTickets(data.tickets);
        } else {
          setError("Error fetching tickets");
        }
      })
      .catch((err) => {
        setError("Error fetching tickets: " + err.message);
      });
  }, []);

  return (
    <div style={styles.ticketList}>
      <h2 style={styles.heading}>My Tickets</h2>
      {error && <div style={styles.error}>{error}</div>}
      {tickets.length === 0 && !error && <p>No tickets found.</p>}
      {tickets.map((ticket) => (
        <div key={ticket._id} style={styles.ticket}>
          <h3>Ticket Details</h3>
          <p>Ticket Id: {ticket._id}</p>
          <p>Ticket Holder Name: {ticket.name}</p>
          <p>Route: {ticket.route}</p>
          <p>Quantity: {ticket.quantity}</p>
          {/* Remove the isScanned section as per your request */}
          {ticket.qrCode ? (
            <img src={ticket.qrCode} alt="QR Code" style={styles.ticketImage} />
          ) : (
            <QRCodeSVG value={JSON.stringify(ticket)} size={256} />
          )}
        </div>
      ))}
    </div>
  );
}

export default MyTickets;
