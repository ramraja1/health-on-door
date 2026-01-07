import express from "express";
import { getAllProviders,approveProvider } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.get(
  "/providers",
  protect,
  allowRoles("SUPER_ADMIN"),
  getAllProviders
);

router.patch(
  "/providers/:id/approve",
  protect,
  allowRoles("SUPER_ADMIN"),
  approveProvider
);


export default router;
