import express from "express";
import { router } from "./routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";

export const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "AI Clinic OS API is running"
  });
});

app.use("/api", router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);