import * as Discord from "discord.js";

interface A {
  serverToken: string;
}

type Return = Promise<Discord.Client | string>;

/**
 * Creates, signs into, and returns a Client object.
 * This can be passed into other discord util functions.
 *
 * @param A { Object }
 * @param A.serverToken { String }
 * @returns Return
 */
const connectToDiscordServer = ({ serverToken }: A): Return => {
  return new Promise(async (res, rej) => {
    try {
      const client = new Discord.Client();

      await client.login(serverToken);

      res(client);
    } catch (error) {
      rej("lore-keeper error: Failed to connect to or create the client.");
    }
  });
};

export { connectToDiscordServer };
