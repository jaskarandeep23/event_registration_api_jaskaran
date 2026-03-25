import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateEvent:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - location
 *         - capacity
 *       properties:
 *         name:
 *           type: string
 *           minLength: 3
 *           description: Name of the event
 *           example: Tech Conference
 *         date:
 *           type: string
 *           format: date
 *           description: Date of the event
 *           example: 2026-04-15
 *         location:
 *           type: string
 *           description: Location of the event
 *           example: Winnipeg
 *         capacity:
 *           type: integer
 *           minimum: 1
 *           description: Maximum number of attendees
 *           example: 100
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     UpdateEvent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 3
 *           description: Updated name of the event
 *           example: Updated Tech Conference
 *         date:
 *           type: string
 *           format: date
 *           description: Updated date of the event
 *           example: 2026-04-20
 *         location:
 *           type: string
 *           description: Updated location of the event
 *           example: Toronto
 *         capacity:
 *           type: integer
 *           minimum: 1
 *           description: Updated maximum number of attendees
 *           example: 150
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       required:
 *         - error
 *         - message
 *       properties:
 *         error:
 *           type: string
 *           description: Error type or code
 *           example: VALIDATION_ERROR
 *         message:
 *           type: string
 *           description: Human-readable error message
 *           example: Name is required
 */

export const createEventSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters",
      "any.required": "Name is required",
    }),

  date: Joi.date()
    .iso()
    .required()
    .messages({
      "date.base": "Date must be a valid ISO date",
      "any.required": "Date is required",
    }),

  location: Joi.string()
    .trim()
    .required()
    .messages({
      "string.empty": "Location is required",
      "any.required": "Location is required",
    }),

  capacity: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Capacity must be a number",
      "number.integer": "Capacity must be an integer",
      "number.positive": "Capacity must be greater than 0",
      "any.required": "Capacity is required",
    }),
});

export const updateEventSchema = Joi.object({
  name: Joi.string().trim().min(3).messages({
    "string.min": "Name must be at least 3 characters",
  }),

  date: Joi.date().iso().messages({
    "date.base": "Date must be a valid ISO date",
  }),

  location: Joi.string().trim(),

  capacity: Joi.number().integer().positive().messages({
    "number.positive": "Capacity must be greater than 0",
  }),
}).min(1).messages({
  "object.min": "At least one field must be provided for update",
});