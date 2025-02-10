const express = require("express");
const { bookTicket, getUserTickets } = require("../controllers/ticketController");

const router = express.Router();

router.post("/book", bookTicket);
router.get("/tickets", getUserTickets);

module.exports = router;
