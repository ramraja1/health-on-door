import express from "express";
import { registerProvider } from "../controllers/provider.controller.js";

const router = express.Router();

router.post("/register", registerProvider);

export default router;
