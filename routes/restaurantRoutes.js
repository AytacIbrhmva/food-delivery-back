const express = require("express");
const { getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant, getRestaurant } = require("../controllers/restaurantController");
const router = express.Router();

router.route("/").get(getRestaurants).post(createRestaurant)
router.route("/:id").put(updateRestaurant).delete(deleteRestaurant).get(getRestaurant)

module.exports = router