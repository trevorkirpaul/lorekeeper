import { findIndex, isNull, isUndefined, isNumber } from "lodash";

import { PlayerDefinition } from "utils/database/models/Player";

import { isValidPlayer } from "../isValidPlayer";

interface Level {
  value: Number;
  experienceNeeded: Number;
}

interface Config {
  /**
   * When true will return the Level object
   * rather than just the value
   */
  verbose?: Boolean;
  /**
   * Returns the next level (if avail)
   * This can be used when you quickly need
   * the next level's necessary exp
   */
  returnNextLevel?: Boolean;
  /**
   * Returns the given level (value)
   * ie: `getPlayerLevel({ explicitlyReturn: 5 })` will return
   * level 5, aka `Levels[4]`
   */
  explicitlyReturn?: Number;
}

/**
 * Returns an array of numbers which represent a level.
 * Any code related to level caps or the amount of levels
 * should only reside in this function.
 */
const createLevels = (): Level[] => {
  return Array.from(Array(61).keys())
    .filter((x, i) => i !== 0)
    .map((num) => ({
      value: num,
      experienceNeeded: num * 500,
    }));
};

const Levels = createLevels();

interface A {
  player: PlayerDefinition;
  config?: Config;
}

/**
 * getPlayerLevel is used to transform and return
 * a value based on the given Player's `experiencePoints`.
 * All logic which influences this value will be located within
 * this function. This means that any modifications to how
 * the level is derived should only reside within this function.
 */
const getPlayerLevel = ({ player, config }: A): Number | Level => {
  const configExists = !isNull(config) && !isUndefined(config);

  if (configExists && isNumber(config.explicitlyReturn)) {
    if (typeof config.explicitlyReturn !== "number") {
      throw new Error(
        "LoreKeeper Error: Failed to return explicit level with getPlayerLevel. Please check the value you passed, it is not a number."
      );
    }

    if (config.explicitlyReturn === 0) {
      return Levels[0];
    }

    const correctedIndexForExplicitLevel = config.explicitlyReturn - 1;

    return Levels[correctedIndexForExplicitLevel.valueOf()];
  }

  // End of handling config
  // Validate Player then find level

  if (!isValidPlayer({ candidatePlayer: player })) {
    throw new Error(
      "getPlayerLevel Error: did not receive a valid Player (candidatePlayer)."
    );
  }

  // find the matching level from Levels
  // using the Player's exp
  // we'll return `Level.value`
  // or throw an error
  try {
    const computedNextLevel = Levels.find(
      (level) => level.experienceNeeded > player.experiencePoints
    );

    // if player exceeds all level's necessary exp
    // we'll return the max level
    if (!computedNextLevel) {
      return Levels[Levels.length - 1].value;
    }

    const computedNextLevelIndex = findIndex(Levels, computedNextLevel);

    const correctIndex =
      computedNextLevelIndex <= 1
        ? computedNextLevelIndex
        : computedNextLevelIndex - 1;

    // return next level based on config
    // @NOTE: We'll always return a full obj here
    // since this path is for an extension
    if (configExists && config.returnNextLevel) {
      return Levels[computedNextLevelIndex];
    }

    // return full obj based on config
    if (configExists && config.verbose) {
      return Levels[correctIndex];
    }

    return Levels[correctIndex].value;
  } catch (error) {
    throw error;
  }
};

export { getPlayerLevel };
