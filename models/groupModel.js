const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    rid: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
);

module.exports = mongoose.model("Group", groupSchema);
