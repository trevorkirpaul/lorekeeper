import { PlayerDefinition } from "utils/database/models/Player";

const player: PlayerDefinition = {
  name: "testPlayer",
  status: "test status",
  uid: "1234",
  did: "1234",
  gold: 100,
  experiencePoints: 10000,
  achievementPoints: 100,
  skills: [],
  class: [],
  stats: {
    health: 10,
    mana: 10,
    strength: 10,
    intellect: 10,
    agility: 10,
  },
};

export default player;
