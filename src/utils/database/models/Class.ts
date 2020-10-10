import { Schema, model } from "mongoose";

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  classId: {
    type: String,
    required: true,
  },
});

export default model("class", classSchema);
