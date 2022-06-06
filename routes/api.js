const Category = require("../category/category");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const category = require("../category/category");

router.get("/category", (req, res) => {
  Category.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      res.json({ message: "success", data: data });
    }
  });
});

router.post("/category", (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.name);
  console.log(JSON.stringify(req.body.name));
  let newCategory = new Category({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    color: req.body.color,
  });
  newCategory
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Handling POST requests to /users",
        createdProduct: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdProduct: err,
      });
    });
});

router.delete("/category/:id", (req, res) => {
  console.log(req.params.id);
  Category.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      return res.json({ message: "success", data1: data });
    })
    .catch((err) => {
      return res.json({ message: "error", data2: data });
    });
});

router.route("/categories").post(function (req, res) {
  Category.findByIdAndUpdate(
    { _id: "629db97f428af2b5b90a748d" },
    { name: "Great Dane" },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
