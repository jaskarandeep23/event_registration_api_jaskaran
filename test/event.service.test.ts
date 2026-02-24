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
    // Arrange
    (eventRepository.createEvent as jest.Mock).mockResolvedValue(mockEvent);

    // Act
    const result = await eventService.createEvent(mockEvent);

    // Assert
    expect(result).toEqual(mockEvent);
    expect(eventRepository.createEvent).toHaveBeenCalledTimes(1);
  });

  test("should return all events", async () => {
    // Arrange
    (eventRepository.getAllEvents as jest.Mock).mockResolvedValue([mockEvent]);

    // Act
    const result = await eventService.getAllEvents();

    // Assert
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Test Event");
  });

  test("should return event by ID", async () => {
    // Arrange
    (eventRepository.getEventById as jest.Mock).mockResolvedValue(mockEvent);

    // Act
    const result = await eventService.getEventById("123");

    // Assert
    expect(result).toEqual(mockEvent);
    expect(eventRepository.getEventById).toHaveBeenCalledWith("123");
  });

  test("should update an event", async () => {
    // Arrange
    const updatedEvent = { ...mockEvent, location: "Toronto" };
    (eventRepository.updateEvent as jest.Mock).mockResolvedValue(updatedEvent);

    // Act
    const result = await eventService.updateEvent("123", { location: "Toronto" });

    // Assert
    expect(result.location).toBe("Toronto");
    expect(eventRepository.updateEvent).toHaveBeenCalledWith("123", { location: "Toronto" });
  });

  test("should delete an event", async () => {
    // Arrange
    (eventRepository.deleteEvent as jest.Mock).mockResolvedValue(true);

    // Act
    const result = await eventService.deleteEvent("123");

    // Assert
    expect(result).toBe(true);
    expect(eventRepository.deleteEvent).toHaveBeenCalledWith("123");
  });
});