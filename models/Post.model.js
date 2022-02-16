const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    creatorId: {
      type: String,
      unique: true,
    },
    picPath: {
      type: String,
      required: true,
    },
    picName: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Post", postSchema);