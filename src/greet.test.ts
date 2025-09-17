import { greet } from "./greet";

describe("greet", () => {
  it("should say Welcome to PulpoCon🐙TDD workshop", () => {
    const expectedMessage = "Welcome to PulpoCon🐙TDD workshop";

    const greetMessage = greet();

    expect(greetMessage).toBe(expectedMessage);
  });
});
