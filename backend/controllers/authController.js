const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Signup request received:", { name, email });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });

    await user.save();
    console.log("User created successfully:", user._id);
    res.status(201).json({
      message: "✅ User created successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request received:", { email });

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("User logged in successfully:", user._id);
    res.json({ userId: user._id, name: user.name, email: user.email });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = { signup, login };
