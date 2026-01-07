import Provider from "../models/Provider.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerProvider = async (req, res) => {
  try {
    const { name, email, password, city } = req.body;

    if (!name || !email || !password || !city) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "PROVIDER",
    });

    await Provider.create({
      name,
      owner: user._id,
      city,
      status: "PENDING",
    });

    res.status(201).json({
      message: "Provider registered. Awaiting admin approval.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error during provider registration",
    });
  }
};
