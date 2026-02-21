import { createEventSchema, updateEventSchema } from "../src/api/v1/validation/event.validation";

describe("Event Validation Tests", () => {
  const validEvent = {
    name: "Tech Conference",
    date: "2025-03-10",
    location: "Winnipeg",
    capacity: 150,
  };

  test("should validate a correct event", () => {
    const { error } = createEventSchema.validate(validEvent);
    expect(error).toBeUndefined();
  });

  test("should fail when required fields are missing", () => {
    const { error } = createEventSchema.validate({});
    expect(error).toBeDefined();
  });

  test("should validate partial update", () => {
    const { error } = updateEventSchema.validate({ location: "Toronto" });
    expect(error).toBeUndefined();
  });

  test("should fail update when no fields provided", () => {
    const { error } = updateEventSchema.validate({});
    expect(error).toBeDefined();
  });
});
