import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";
import healthRoutes from "./api/v1/routes/health.routes";
import helmet from "helmet";
import cors from "cors";
import setupSwagger from "./config/swagger";

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
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

app.use("/api/v1", eventRoutes);
app.use("/api/v1", healthRoutes);

app.get("/", (_req, res) => {
  res.send("API is running");
});

setupSwagger(app);

export default app;