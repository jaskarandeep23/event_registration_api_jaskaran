import { Request, Response } from "express";
import * as eventService from "../services/event.service";
import { HTTP_STATUS } from "../../../constants/httpStatus";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await eventService.createEvent(req.body);

    return res.status(HTTP_STATUS.CREATED).json({
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create event",
    });
  }
};

export const getAllEvents = async (_req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEvents();

    return res.status(HTTP_STATUS.OK).json({
      data: events,
    });
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch events",
    });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await eventService.getEventById(req.params.id);

    if (!event) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        message: "Event not found",
      });
    }

    return res.status(HTTP_STATUS.OK).json({
      data: event,
    });
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to fetch event",
    });
  }
};
