import { Router } from "express";
import { authRouter } from "../modules/auth/routes/auth.routes.js";

export const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "API is healthy"
  });
});

router.use("/auth", authRouter);