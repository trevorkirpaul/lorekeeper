import { Schema, model } from "mongoose";

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  skillId: {
    type: String,
    required: true,
  },
});

export default model("skill", skillSchema);
