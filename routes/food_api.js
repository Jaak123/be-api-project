const Foods = require("../foods/foods");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FoodController = require("../controller/FoodController");

router.get("/foods", FoodController.getFoods);

router.post("/foods", FoodController.createFoods);

router.delete("/foods/:id", FoodController.deleteFoods);

router.post("/foods/:id", FoodController.updateFoods);

module.exports = router;
