/**
 * **Spiderman Controller**
 * Within this app, we use "controllers" (they're just functions)
 * to isolate the reactionary logic.
 *
 * -- How did we get to this code/file/module? --
 * The app starts at `src/index.ts`.
 * There, we invoke `connectToDiscordServer` which contains
 * the logic to connect to the bot/discord.
 * More importantly, it invokes a function, `messageGateway`.
 *
 * `messageGateway` is a function which we pass the discord client to.
 * The discord client can be thought of as the instance of discord
 * and contains all data, from messages sent to user  info.
 *
 * Whenever a message is sent, `messageGateway` will pass that message
 * to the "controllers" located within it.
 *
 * These "controllers" are used to group together feature-similar
 * code. This module, `spidermanController`, is a controller.
 * We'll pass it the `message` value and write the reactions
 * we would like to occur based on certain scenarios.
 */
import { Message } from "discord.js";

/**
 * this is for TypeScript. It describes
 * the args for the function `spidermanController`.
 */
interface SpidermanControllerArgs {
  /**
   * You can find more info at this link:
   * https://discord.js.org/#/docs/main/stable/class/Message
   *
   * Message is from the library `discord.js` which provides
   * all of the discord logic for us to extend.
   */
  message: Message;
}

const spidermanController = ({ message }: SpidermanControllerArgs) => {
  /**
   * Super basic example:
   * `message` is an object (more info in the link on ln 35) which
   * contains data like:
   * `message.content`: the string value of the message sent in discord
   * `message.author`: the discord User
   * more info here: https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=author
   */
  if (message.content === "!spiderman-quote") {
    const computedSpideyQuote = "pretend it's something";

    // `message` contains a method `message.channel.send`
    // we invoke that with the string arg to send a message
    // in the same channel as the origin message
    message.channel.send(computedSpideyQuote);
  }
};

export default spidermanController;
