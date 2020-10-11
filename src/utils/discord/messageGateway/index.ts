import { Client } from "discord.js";

import { experienceCollector } from "utils/discord/controllers/experienceCollector";

import { profileController } from "../controllers/profile";

interface A {
  client: Client;
}

/**
 * messageGateway is a function which handles any side-effects
 * which should happen when lorekeeper reads a message.
 */
const messageGateway = ({ client }: A) => {
  client.on("message", async (message) => {
    if (message.author.id === client.user.id) {
      return null;
    }

    await experienceCollector({
      message,
    });

    await profileController({
      message,
    });
  });
};

export { messageGateway };
