import Provider from "../models/Provider.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerProvider = async (req, res) => {
  const { name, email, password, city } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "PROVIDER",
  });

  const provider = await Provider.create({
    name,
    owner: user._id,
    city,
  });

  res.status(201).json({
    message: "Provider registered. Awaiting approval.",
  });
};
