import Joi from "joi";

export const createEventSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  location: Joi.string().required(),
  capacity: Joi.number().integer().positive().required(),
});

export const updateEventSchema = Joi.object({
  name: Joi.string(),
  date: Joi.string(),
  location: Joi.string(),
  capacity: Joi.number().integer().positive(),
}).min(1);
