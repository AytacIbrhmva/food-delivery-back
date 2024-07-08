const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/restaurantModel");


const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find();
  res.status(200).json(restaurants);
});

const createRestaurant = asyncHandler(async (req, res) => {
  const { region, currency, service_tax, sliders, popular_foods, top_of_week_foods } = req.body;
  if (!region || !currency || !service_tax || !sliders || !popular_foods || !top_of_week_foods) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const restaurant = await Restaurant.create({
    region,
    currency,
    service_tax,
    sliders,
    popular_foods,
    top_of_week_foods,
  });
  res.status(201).json(restaurant);
});

const updateRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) {
    res.status(404);
    throw new Error("Restaurant not found");
  }
  const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedRestaurant);
});

const deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) {
    res.status(404);
    throw new Error("Restaurant not found");
  }
  await Restaurant.deleteOne({ _id: req.params.id });
  res.status(200).json(restaurant);
});

const getRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) {
    res.status(404);
    throw new Error("Restaurant not found");
  }

  res.status(200).json(restaurant);
});

module.exports = { getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant, getRestaurant };
