const QRCode = require("qrcode");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

const ferryRoutes = [
  { name: "Dakhineswar-Belur Math", price: 10 },
  { name: "Konnagar-Panihati", price: 8 },
  { name: "Barrackpore-Serampore", price: 7 },
  { name: "Barrackpore-Seoraphuli", price: 6 },
  { name: "Belur Math-Dakhineswar", price: 10 },
  { name: "Panihati-Konnagar", price: 8 },
  { name: "Serampore-Barrackpore", price: 7 },
  { name: "Seoraphuli-Barrackpore", price: 6 },
];

const bookTicket = async (req, res) => {
  console.log("Received booking request:", req.body);
  try {
    const { userId, route, quantity } = req.body;

    if (!userId || !route || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const selectedRoute = ferryRoutes.find((r) => r.name === route);
    if (!selectedRoute) {
      return res.status(400).json({ message: "Invalid route" });
    }

    const parsedQuantity = Number.parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity < 1 || parsedQuantity > 4) {
      return res.status(400).json({ message: "Invalid quantity" });
    }

    const totalPrice = selectedRoute.price * parsedQuantity;
    const qrCodeData = JSON.stringify({ userId, route, quantity: parsedQuantity, totalPrice });
    const qrCode = await QRCode.toDataURL(qrCodeData);

    // Save the user's name along with the other ticket details
    const ticket = new Ticket({
      userId,
      name: user.name, // Save the user's name here
      route,
      quantity: parsedQuantity,
      totalPrice,
      qrCode,
    });
    await ticket.save();

    res.status(201).json({
      message: "Ticket booked successfully",
      ticket: {
        id: ticket._id,
        name: ticket.name, // Include the name in the response
        route: ticket.route,
        quantity: ticket.quantity,
        totalPrice: ticket.totalPrice,
        qrCode: ticket.qrCode,
      },
    });
  } catch (error) {
    console.error("❌ Error booking ticket:", error);
    res.status(500).json({ message: "Error booking ticket" });
  }
};

const getUserTickets = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Fetch tickets, filter out those older than 24 hours, and delete them
    const expiredTickets = await Ticket.deleteMany({
      createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // Remove tickets older than 24 hours
    });

    const tickets = await Ticket.find({
      userId,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // Only return tickets younger than 24 hours
    });

    res.json({ tickets });
  } catch (error) {
    console.error("❌ Error fetching tickets:", error);
    res.status(500).json({ message: "Error fetching tickets" });
  }
};

module.exports = { bookTicket, getUserTickets };
