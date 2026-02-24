import Joi from "joi";

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