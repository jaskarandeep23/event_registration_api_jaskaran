import * as repository from "../repositories/event.repository";
import { Event } from "../models/event.model";

export const createEvent = async (event: Event) => {
  return repository.createEvent(event);
};

export const getAllEvents = async () => {
  return repository.getAllEvents();
};

export const getEventById = async (id: string) => {
  return repository.getEventById(id);
};
