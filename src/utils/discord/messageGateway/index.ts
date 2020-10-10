import { Client } from "discord.js";

import { profileController } from "../controllers/profile";

interface A {
  client: Client;
}

/**
 * messageGateway is a function which handles any side-effects
 * which should happen when lorekeeper reads a message.
 */
const messageGateway = ({ client }: A) => {
  client.on("message", (message) => {
    if (message.author.id === client.user.id) {
      return null;
    }

    console.log("message received...");

    profileController({
      message,
    });
  });
};

export { messageGateway };
