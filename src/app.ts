import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";
import healthRoutes from "./api/v1/routes/health.routes";

const app = express();

app.use(express.json());

app.use("/api/v1", eventRoutes);
app.use("/api/v1", healthRoutes);

app.get("/", (_req, res) => {
  res.send("API is running");
});

export default app;