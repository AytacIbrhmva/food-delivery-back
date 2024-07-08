const express = require("express");
const { createGroup, getGroups } = require("../controllers/groupController");
const router = express.Router();

router.route("/:rid").get(getGroups)
router.route("/").post(createGroup)
// router.route("/:id").put(updateRestaurant).delete(deleteRestaurant).get(getRestaurant)

module.exports = router