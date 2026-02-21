import { Event } from "../models/event.model";
import * as eventRepository from "../repositories/event.repository";

export const createEvent = async (data: Event) => {
  return eventRepository.createEvent(data);
};

export const getAllEvents = async () => {
  return eventRepository.getAllEvents();
};

export const getEventById = async (id: string) => {
  return eventRepository.getEventById(id);
};

export const updateEvent = async (id: string, data: Partial<Event>) => {
  return eventRepository.updateEvent(id, data);
};

export const deleteEvent = async (id: string) => {
  return eventRepository.deleteEvent(id);
};
