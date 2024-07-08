const asyncHandler = require("express-async-handler");
const Group = require("../models/groupModel");

const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find({rid: req.params.rid});
  if(!groups) {
    res.status(400)
    throw new Error("Groups not found");
  }
  res.status(200).json(groups);
});


const createGroup = asyncHandler(async (req, res) => {
  const { thumb, title, rid } = req.body;
  console.log("req.body:-------", req.body);

  if (!thumb || !title || !rid) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const group = await Group.create({
    rid,
    thumb,
    title
  });
  res.status(201).json(group);
});

module.exports = { createGroup, getGroups };
