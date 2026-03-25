import { Router } from "express";
import * as eventController from "../controllers/event.controller";
import { validate } from "../middleware/validate.middleware";
import {
  createEventSchema,
  updateEventSchema,
} from "../validation/event.validation";

const router = Router();

/**
 * @openapi
 * /events:
 *   post:
 *     summary: Create a new event
 *     description: Creates a new event in the system.
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEvent'
 *     responses:
 *       '201':
 *         description: Event created successfully
 *       '400':
 *         description: Invalid input data
 *       '500':
 *         description: Internal server error
 */
router.post(
  "/events",
  validate(createEventSchema),
  eventController.createEvent
);

/**
 * @openapi
 * /events:
 *   get:
 *     summary: Get all events
 *     description: Retrieves a list of all events.
 *     tags: [Events]
 *     responses:
 *       '200':
 *         description: Successfully retrieved events
 *       '500':
 *         description: Internal server error
 */
router.get("/events", eventController.getAllEvents);

/**
 * @openapi
 * /events/{id}:
 *   get:
 *     summary: Get event by ID
 *     description: Retrieves a single event using its ID.
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event
 *     responses:
 *       '200':
 *         description: Event retrieved successfully
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Internal server error
 */
router.get("/events/:id", eventController.getEventById);

/**
 * @openapi
 * /events/{id}:
 *   put:
 *     summary: Update an event
 *     description: Updates an existing event using its ID.
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateEvent'
 *     responses:
 *       '200':
 *         description: Event updated successfully
 *       '400':
 *         description: Invalid input data
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Internal server error
 */
router.put(
  "/events/:id",
  validate(updateEventSchema),
  eventController.updateEvent
);

/**
 * @openapi
 * /events/{id}:
 *   delete:
 *     summary: Delete an event
 *     description: Deletes an event using its ID.
 *     tags: [Events]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event
 *     responses:
 *       '200':
 *         description: Event deleted successfully
 *       '404':
 *         description: Event not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/events/:id", eventController.deleteEvent);

export default router;