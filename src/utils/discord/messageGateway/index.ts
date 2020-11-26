import { Client } from "discord.js";

import { experienceCollector } from "utils/discord/controllers/experienceCollector";

import { profileController } from "../controllers/profile";
import { gambleController } from "../controllers/gamble";

interface A {
  client: Client;
}

/**
 * messageGateway is a function which handles any side-effects
 * which should happen when lorekeeper reads a message.
 *
 * When a valid message is read/intercepted/passed,
 * we'll invoke our controllers.
 *
 * Our controllers are functions which will take message or
 * other args and respond accordingly. All of our reactionary
 * logic is grouped into one of the controllers.
 *
 * Any side-effects or responses triggered or based on a message
 * will *always* be within `messageGateway`.
 */
const messageGateway = ({ client }: A) => {
  client.on("message", async (message) => {
    if (message.author.id === client.user.id) {
      return null;
    }

    experienceCollector({
      message,
    });

    profileController({
      message,
    });

    gambleController({
      message,
    });
  });
};

export { messageGateway };
