import * as eventService from "../src/api/v1/services/event.service";
import * as eventRepository from "../src/api/v1/repositories/event.repository";

jest.mock("../src/api/v1/repositories/event.repository");

describe("Event Service Tests", () => {
  const mockEvent = {
    id: "123",
    name: "Test Event",
    date: "2025-03-10",
    location: "Winnipeg",
    capacity: 100,
  };

  test("should create an event", async () => {
    (eventRepository.createEvent as jest.Mock).mockResolvedValue(mockEvent);

    const result = await eventService.createEvent(mockEvent);

    expect(result).toEqual(mockEvent);
    expect(eventRepository.createEvent).toHaveBeenCalledTimes(1);
  });

  test("should return all events", async () => {
    (eventRepository.getAllEvents as jest.Mock).mockResolvedValue([mockEvent]);

    const result = await eventService.getAllEvents();

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Test Event");
  });

  test("should return event by ID", async () => {
    (eventRepository.getEventById as jest.Mock).mockResolvedValue(mockEvent);

    const result = await eventService.getEventById("123");

    expect(result).toEqual(mockEvent);
  });

  test("should update an event", async () => {
    const updated = { ...mockEvent, location: "Toronto" };

    (eventRepository.updateEvent as jest.Mock).mockResolvedValue(updated);

    const result = await eventService.updateEvent("123", { location: "Toronto" });

    expect(result.location).toBe("Toronto");
  });

  test("should delete an event", async () => {
    (eventRepository.deleteEvent as jest.Mock).mockResolvedValue(true);

    const result = await eventService.deleteEvent("123");

    expect(result).toBe(true);
  });
});
