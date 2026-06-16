import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { LoginDto } from "../types/auth.types.js";

export class AuthService {
  async login(data: LoginDto) {
    const mockUser = {
      id: "1",
      email: "admin@clinic.com",
      passwordHash: await bcrypt.hash("password123", 10)
    };

    const isValid = await bcrypt.compare(
      data.password,
      mockUser.passwordHash
    );

    if (!isValid || data.email !== mockUser.email) {
      throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign(
      {
        userId: mockUser.id,
        email: mockUser.email
      },
      "super-secret-key",
      {
        expiresIn: "15m"
      }
    );

    return {
      accessToken
    };
  }
}