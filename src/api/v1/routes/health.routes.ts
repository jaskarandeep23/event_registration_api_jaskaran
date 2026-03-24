import { Router } from "express";
import { healthCheck } from "../controllers/health.controller";

const router = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check
 *     description: Returns the health status of the API.
 *     tags: [Health]
 *     responses:
 *       '200':
 *         description: API is running successfully
 */
router.get("/health", healthCheck);

export default router;