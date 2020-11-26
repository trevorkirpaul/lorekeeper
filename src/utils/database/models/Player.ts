import { Schema, model } from "mongoose";

export interface PlayerDefinition {
  name: string;
  status?: string | null;
  uid: string;
  did: string;
  experiencePoints: number;
  achievementPoints: number;
  gold: number;
  skills: any[];
  class: any[];
  stats: {
    health: number;
    mana: number;
    strength: number;
    intellect: number;
    agility: number;
  };
}

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  did: {
    type: String,
    required: true,
    unique: true,
  },
  experiencePoints: {
    type: Number,
    required: true,
  },
  achievementPoints: {
    type: Number,
    required: true,
  },
  gold: {
    type: Number,
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "skill",
    },
  ],
  class: [
    {
      type: Schema.Types.ObjectId,
      ref: "skill",
    },
  ],
  stats: {
    health: {
      type: Number,
      required: true,
    },
    mana: {
      type: Number,
      required: true,
    },
    strength: {
      type: Number,
      required: true,
    },
    intellect: {
      type: Number,
      required: true,
    },
    agility: {
      type: Number,
      required: true,
    },
  },
});

export default model("player", playerSchema);
