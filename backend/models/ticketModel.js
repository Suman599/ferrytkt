const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: String,
  userId: String,
  route: String,
  quantity: Number,
  totalPrice: Number,
  qrCode: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", ticketSchema);
