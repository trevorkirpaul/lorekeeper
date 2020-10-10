import { Message } from "discord.js";

import Player, { PlayerDefinition } from "utils/database/models/Player";

interface A {
  message: Message;
}

const getProfile = async ({ message }: A) => {
  const { author } = message;

  try {
    const profile: PlayerDefinition | null = Player.findOne({
      did: author.id,
    });

    // @NOTE: temporarily send message
    // until we have a more robust system
    message.channel.send(
      `Here is your profile, ${author.username}, ${profile.did}`
    );

    return profile;
  } catch (error) {
    console.log("getProfile: ERROR, failed to find profile");
    console.log(error);
    return null;
  }
};

export { getProfile };
