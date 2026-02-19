import { Router } from "express";
import * as eventController from "../controllers/event.controller";
import { validate } from "../middleware/validate.middleware";
import { createEventSchema } from "../validation/event.validation";

const router = Router();

// Create Event
router.post(
  "/events",
  validate(createEventSchema),
  eventController.createEvent
);

// Get All Events
router.get("/events", eventController.getAllEvents);

// Get Event By ID
router.get("/events/:id", eventController.getEventById);

export default router;
