import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";

const app = express();
app.use(express.json());

app.use("/api/v1", eventRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
import healthRoutes from "./api/v1/routes/health.routes";
app.use("/api/v1", healthRoutes);

