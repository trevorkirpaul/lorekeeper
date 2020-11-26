import { Message } from "discord.js";

import Player, { PlayerDefinition } from "utils/database/models/Player";
import { isValidPlayer } from "utils/discord/helpers/isValidPlayer";
import { createUserTag } from "utils/discord/helpers/createUserTag";

// Dice factory
export const createDice = () => {
  return {
    roll: () => Math.random() * 10,
  };
};

interface RollDiceArgs {
  message: Message;
}

/**
 * This is basically a test command for manipulating gold
 * based on user actions
 * @param param0
 */
const rollDice = async ({ message }: RollDiceArgs): Promise<void> => {
  const {
    author: { id },
    content,
  } = message;

  try {
    // find player in DB matching the did (discord id) to
    // the message.author.id
    const profile: PlayerDefinition | null = await Player.findOne({
      did: id,
    });
    const userTag = createUserTag({ user: message.author });

    if (!isValidPlayer({ candidatePlayer: profile })) {
      message.channel.send(`${userTag}, you need to create a profile first.`);
      return null;
    }

    const { gold } = profile;

    // dice roll logic

    message.channel.send(`${userTag}, you have ${gold} gold.`);
  } catch (error) {
    message.channel.send("rollDice command error");
  }
};

export default rollDice;
