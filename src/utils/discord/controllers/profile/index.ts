import { Message } from "discord.js";

import { createProfile } from "./methods/create";
import { getProfile } from "./methods/get";

import COMMANDS from "constants/commands";

interface A {
  message: Message;
}

/**
 * This controllers contains all commands
 * related to the Profile feature.
 */
const profileController = ({ message }: A) => {
  const { createProfileCommand, getProfileCommand } = COMMANDS;

  if (message.content === createProfileCommand) {
    createProfile({
      message,
    });
  }

  if (message.content === getProfileCommand) {
    getProfile({
      message,
    });
  }
};

export { profileController };
