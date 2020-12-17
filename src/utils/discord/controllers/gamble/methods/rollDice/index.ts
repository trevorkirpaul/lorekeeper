import { Message } from "discord.js";
import { random } from "lodash";

import Player, { PlayerDefinition } from "utils/database/models/Player";
import { isValidPlayer } from "utils/discord/helpers/isValidPlayer";
import { createUserTag } from "utils/discord/helpers/createUserTag";
import { updatePlayerStats } from "utils/discord/helpers/updatePlayerStats";

import { isValidNumber } from "utils/helpers";

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
const rollDice = async ({ message }: RollDiceArgs): Promise<void | Message> => {
  const {
    author: { id },
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

    const goldBet = message.content.split(" ")[1] || null;

    const sanitizedGoldBet = isValidNumber(goldBet);

    if (sanitizedGoldBet === null || typeof sanitizedGoldBet !== "number") {
      return message.channel.send(
        `${userTag}, ${goldBet} is not a valid bet. Please use a number.`
      );
    }

    if (gold < sanitizedGoldBet) {
      return message.channel.send(
        `You lack the gold ${userTag}, you only have ${gold}. You need ${sanitizedGoldBet}`
      );
    }

    const diceRoll = random(1, 6);

    if (diceRoll === 6) {
      const updateValue = sanitizedGoldBet * 0.6 + sanitizedGoldBet;

      updatePlayerStats({
        message,
        updateOptions: {
          statToUpdate: "gold",
          updateValue,
        },
      });

      return message.channel.send(
        `Congrats, ${userTag}, you rolled a 6 and won!`
      );
    } else {
      const updateValue = sanitizedGoldBet * -1;

      updatePlayerStats({
        message,
        updateOptions: {
          statToUpdate: "gold",
          updateValue,
        },
      });

      return message.channel.send(
        `Sorry, ${userTag}, you did not roll a 6. You rolled a ${diceRoll} and lost!`
      );
    }
  } catch (error) {
    message.channel.send("rollDice command error");
  }
};

export default rollDice;
