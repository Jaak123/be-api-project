const Foods = require("../foods/foods");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FoodController = require("../controller/FoodController");

router.get("/foods", FoodController.getFoods);

router.post("/foods", FoodController.createFoods);

router.delete("/foods/:id", FoodController.deleteFoods);

router.post("/foods/:id", FoodController.updateFoods);

// router.post("/foods/name/:name", function (req, res, next) {
//   console.log(req.body.name);
//   var regexValue = "^" + searchName;
//   var queryOptions = {
//     searchTitle: {
//       $regex: regexValue,
//       $options: "i",
//     },
//   };
//   Foods.find(queryOptions)
//     .then(function (data) {
//       if (data) {
//         return res.status(200).json(data);
//       } else {
//         return res.status(422).json("No data");
//       }
//     })
//     .catch(function (error) {
//       return res.status(500).json(error);
//     });
// });

module.exports = router;
