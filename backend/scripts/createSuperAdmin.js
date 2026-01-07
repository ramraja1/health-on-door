import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

await mongoose.connect(process.env.MONGO_URI);

const password = await bcrypt.hash("admin123", 10);

await User.create({
  name: "Super Admin",
  email: "admin@healthondoor.com",
  password,
  role: "SUPER_ADMIN",
});

console.log("Super Admin created successfully");
process.exit();
