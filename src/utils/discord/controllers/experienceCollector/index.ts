import { Message } from "discord.js";

import Player from "utils/database/models/Player";

interface A {
  message: Message;
}

/**
 * contains all the logic for reading a message and updating
 * the player's experience
 */
const experienceCollector = async ({ message }: A) => {
  const {
    author: { id },
    content,
  } = message;

  const pointsToAdd = content.split("").length;

  try {
    const player = await Player.findOneAndUpdate(
      { did: id },
      {
        $inc: {
          experiencePoints: pointsToAdd,
        },
      }
    );
  } catch (error) {
    console.log("experienceCollector: Error", error);
  }
};

export { experienceCollector };
