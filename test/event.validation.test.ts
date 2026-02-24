import { createEventSchema, updateEventSchema } from "../src/api/v1/validation/event.validation";

describe("Event Validation Tests", () => {

  const validEvent = {
    name: "Tech Conference",
    date: "2025-03-10",
    location: "Winnipeg",
    capacity: 150,
  };

  test("should validate a correct event", () => {
    // Arrange
    const eventData = validEvent;

    // Act
    const { error } = createEventSchema.validate(eventData);

    // Assert
    expect(error).toBeUndefined();
  });

  test("should fail when required fields are missing", () => {
    // Arrange
    const eventData = {};

    // Act
    const { error } = createEventSchema.validate(eventData);

    // Assert
    expect(error).toBeDefined();
  });

  test("should validate partial update", () => {
    // Arrange
    const updateData = { location: "Toronto" };

    // Act
    const { error } = updateEventSchema.validate(updateData);

    // Assert
    expect(error).toBeUndefined();
  });

  test("should fail update when no fields provided", () => {
    // Arrange
    const updateData = {};

    // Act
    const { error } = updateEventSchema.validate(updateData);

    // Assert
    expect(error).toBeDefined();
  });
});