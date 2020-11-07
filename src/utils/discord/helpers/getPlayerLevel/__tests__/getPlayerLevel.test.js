import MOCK_PLAYER from "../../../../../mock/testPlayer";

import { getPlayerLevel } from "../index";

describe("getPlayerLevel", () => {
  it("should throw when passed an invalid Player", () => {
    /**
     * @NOTE: We've used an arrow fxn this way
     * in order to test thrown errors.
     * For more info:
     * https://jestjs.io/docs/en/expect#tothrowerror
     */
    expect(() =>
      getPlayerLevel({
        player: null,
      })
    ).toThrow();
  });

  it("should return level", () => {
    const test = getPlayerLevel({
      player: MOCK_PLAYER,
    });

    expect(test).toBe(20);
  });

  it("should return an explicit level", () => {
    const test = getPlayerLevel({
      player: MOCK_PLAYER,
      config: {
        explicitlyReturn: 50,
      },
    });

    expect(test.value).toBe(50);
  });

  it("should handle a verbose return", () => {
    const test = getPlayerLevel({
      player: MOCK_PLAYER,
      config: {
        verbose: true,
      },
    });

    expect(test).toEqual({
      experienceNeeded: 10000,
      value: 20,
    });
  });

  it("should handle returning the next level", () => {
    const test = getPlayerLevel({
      player: MOCK_PLAYER,
      config: {
        returnNextLevel: true,
      },
    });

    expect(test).toEqual({
      experienceNeeded: 10500,
      value: 21,
    });
  });
});
