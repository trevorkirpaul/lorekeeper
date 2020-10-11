import { PlayerDefinition } from "utils/database/models/Player";

interface A {
  candidatePlayer: unknown;
}

function isPlayer(p: any | PlayerDefinition): p is PlayerDefinition {
  return (p as PlayerDefinition).did !== undefined;
}

/**
 * Returns a boolean specifying wether or not
 * the passed `candidatePlayer` is a valid
 * instance of Player, the discord user model.
 * This should be used whenever we are operating
 * on the Player model within MongoDB.
 */
const isValidPlayer = ({ candidatePlayer }: A) => {
  if (!candidatePlayer) return false;
  return isPlayer(candidatePlayer);
};

export { isValidPlayer };
