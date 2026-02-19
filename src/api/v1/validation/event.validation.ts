import Joi from "joi";

export const createEventSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  location: Joi.string().required(),
  capacity: Joi.number().integer().positive().required(),
});
