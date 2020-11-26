import { Message } from "discord.js";

import Player, { PlayerDefinition } from "utils/database/models/Player";

interface A {
  message: Message;
}

/**
 * Handles all of the logic for creating a new user profile.
 * Also triggers any necessary side effects.
 * @param a
 */
const createProfile = async ({ message }: A) => {
  const { author } = message;

  const newProfile: PlayerDefinition = {
    name: author.username,
    did: author.id,
    // @TODO: Replace with UUID
    uid: author.id,
    experiencePoints: 0,
    achievementPoints: 0,
    gold: 100,
    stats: {
      health: 100,
      mana: 100,
      strength: 10,
      intellect: 10,
      agility: 10,
    },
    skills: [],
    class: [],
  };

  try {
    const NewProfile = await Player.create(newProfile);

    message.channel.send(`Welcome to your new adventure, ${author.username}!`);
  } catch (error) {
    // @TODO: Add logging / tracking here
    // console.log(error);
    message.channel.send(
      `Sorry, ${author.username}, we failed to create your profile. Please contact a mod or try again later :(`
    );
  }
};

export { createProfile };
