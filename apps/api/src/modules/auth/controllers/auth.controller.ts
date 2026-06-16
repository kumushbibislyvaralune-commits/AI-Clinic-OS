import type { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";
import { loginSchema } from "../validators/login.validator.js";

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    const data = loginSchema.parse(req.body);

    const result = await authService.login(data);

    res.json({
      success: true,
      data: result
    });
  }
}