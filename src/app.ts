import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";
import healthRoutes from "./api/v1/routes/health.routes";
import helmet from "helmet";

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: { action: "deny" },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
    },
    noSniff: true,
    referrerPolicy: { policy: "no-referrer" },
  })
);

app.use(express.json());

app.use("/api/v1", eventRoutes);
app.use("/api/v1", healthRoutes);

app.get("/", (_req, res) => {
  res.send("API is running");
});

export default app;