const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    connect: {
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
    category: {
      type: String,
      required: true,
    },
    models: [
      {
        price: {
          type: Number,
          required: true,
        },
        discount: {
          price: {
            type: Number,
            required: true,
          },
        },
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
