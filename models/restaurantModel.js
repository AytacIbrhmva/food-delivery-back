const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    region: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    service_tax: {
      type: Number,
      required: true,
    },
    sliders: {
      type: [
        {
          url: {
            type: String,
            required: true,
          },
          src: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
    popular_foods: {
      type: [
        {
          id: {
            type: Number,
            required: true,
          },
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
      ],
    },
    top_of_week_foods: {
      type: [
        {
          id: {
            type: Number,
            required: true,
          },
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
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
