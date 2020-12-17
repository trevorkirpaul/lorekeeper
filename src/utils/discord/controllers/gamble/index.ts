import { Message } from "discord.js";

import COMMANDS from "constants/commands";

import handleRollDiceMethod from "./methods/rollDice";

interface GambleControllerArgs {
  message: Message;
}

const gambleController = ({ message }: GambleControllerArgs) => {
  const { rollDice } = COMMANDS;

  if (message.content.includes(rollDice)) {
    handleRollDiceMethod({ message });
  }
};

export { gambleController };
