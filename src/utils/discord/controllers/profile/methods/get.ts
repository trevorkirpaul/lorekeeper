import { Message } from "discord.js";

import Player, { PlayerDefinition } from "utils/database/models/Player";
import { createRichEmbed } from "utils/discord/helpers/createRichEmbed";
import { isValidPlayer } from "utils/discord/helpers/isValidPlayer";
import { createUserTag } from "utils/discord/helpers/createUserTag";
import { getPlayerLevel } from "utils/discord/helpers/getPlayerLevel";

interface A {
  message: Message;
}

/**
 * contains the logic for what happens when the user
 * invoked the "get profile" command in discord.
 */
const getProfile = async ({ message }: A) => {
  const { author } = message;

  try {
    const profile: PlayerDefinition | null = await Player.findOne({
      did: author.id,
    });

    if (!isValidPlayer({ candidatePlayer: profile })) {
      const userTag = createUserTag({ user: message.author });
      message.channel.send(`${userTag}, you need to create a profile first.`);
      return null;
    }

    const playerLevel = getPlayerLevel({ player: profile });

    // create values for rich embed
    const richEmbedValuesForProfile = {
      title: `[${playerLevel}] ${author.username}`,
      fields: [
        { name: "Experience", value: `${profile.experiencePoints}` },
        { name: "Health", value: `${profile.stats.health}` },
        { name: "Mana", value: `${profile.stats.mana}` },
        { name: "Strength", value: `${profile.stats.strength}` },
        { name: "Intellect", value: `${profile.stats.intellect}` },
        { name: "Agility", value: `${profile.stats.agility}` },
      ],
    };

    const embed = createRichEmbed(richEmbedValuesForProfile);

    message.channel.send(embed);

    return profile;
  } catch (error) {
    console.log("getProfile: ERROR, failed to find profile");
    console.log(error);
    return null;
  }
};

export { getProfile };
