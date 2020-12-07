/**
 * **LoreKeeper**
 * This is the main entry file. There should never be any code above this module.
 *
 * The intent of this module is to invoke the connections to Discord and the database.
 * All of that functionality is contained in their respective modules.
 *
 * # connectToDatabase
 * MongoDB connection
 *
 * # connectToDiscordServer
 * Discord connection and within that Discord related logic
 *
 * ---
 *
 * For more information, visit the repo for the wiki or view the README.
 * - trevorkirpaul@gmail.com
 */
import * as dotenv from "dotenv";

import { connectToDiscordServer } from "./utils/discord";
import { connectToDatabase } from "./utils/database";

dotenv.config();

connectToDatabase();

connectToDiscordServer({
  serverToken: process.env.LOCAL_TOKEN,
})
  .then(() => {
    console.log("lorekeeper bot has connected successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
