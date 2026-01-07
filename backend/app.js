import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import providerRoutes from "./routes/provider.routes.js";
import adminRoutes from "./routes/admin.routes.js";




const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/providers", providerRoutes);

app.use("/api/admin", adminRoutes);


export default app;
