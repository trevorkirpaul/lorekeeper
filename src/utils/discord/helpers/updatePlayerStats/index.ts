import { Message } from "discord.js";

import Player, { PlayerDefinition } from "utils/database/models/Player";
import { isValidPlayer } from "utils/discord/helpers/isValidPlayer";

export interface UpdateOptionsInterface {
  statToUpdate: string;
  updateValue: number;
}

interface UpdatePlayerStatsInterface {
  message?: Message;
  userId?: string;
  updateOptions: UpdateOptionsInterface;
}

/**
 * When invoked, will update the given user's profile
 * based on the options given.
 *
 * You can pass the entire Discord Message in and
 * the function will automatically derive the user based
 * on the message author.
 *
 * Alternatively, you can pass in the user's "did" directly
 * and the function will only have to deal with the database update.
 *
 * "did" is a property we save in the db, it's the discord id
 * and the same as the message.author.id
 *
 * returns a boolean which represents
 * if the update was successful or failed.
 */
export const updatePlayerStats = async ({
  message,
  userId,
  updateOptions,
}: UpdatePlayerStatsInterface): Promise<boolean> => {
  const playerId = userId || message?.author.id;

  const profile: PlayerDefinition | null = await Player.findOne({
    did: playerId,
  });

  if (
    !isValidPlayer({
      candidatePlayer: profile,
    })
  ) {
    return false;
  }

  // begin update logic
  const { updateValue, statToUpdate } = updateOptions;

  try {
    const change = await Player.findOneAndUpdate(
      {
        did: playerId,
      },
      {
        $inc: {
          [statToUpdate]: updateValue,
        },
      }
    );

    return true;
  } catch (error) {
    console.log(
      "updatePlayerStats ERROR: Failed to update player stat. Verbose error logged next..."
    );
    console.log(error);
    return false;
  }
};
