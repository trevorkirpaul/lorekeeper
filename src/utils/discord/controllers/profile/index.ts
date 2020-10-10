import { Message } from "discord.js";

import { createProfile } from "./methods/create";
import { getProfile } from "./methods/get";

import COMMANDS from "constants/commands";

interface A {
  message: Message;
}

const profileController = ({ message }: A) => {
  const { createProfileCommand, getProfileCommand } = COMMANDS;

  console.log(getProfileCommand);
  console.log(message.content);

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
