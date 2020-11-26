import { createDice } from "../rollDice";

describe("createDice function", () => {
  it("should handle creating a new die", () => {
    const test = createDice();
    expect(test).toHaveProperty("roll");
  });
});
