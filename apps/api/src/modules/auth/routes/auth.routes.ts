import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const controller = new AuthController();

export const authRouter = Router();

authRouter.post("/login", controller.login.bind(controller));