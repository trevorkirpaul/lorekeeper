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
