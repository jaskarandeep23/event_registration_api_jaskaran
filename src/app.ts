import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";

const app = express();

app.use(express.json());

app.use("/api/v1", eventRoutes);

app.get("/", (_req, res) => {
  res.send("API is running");
});

export default app;
