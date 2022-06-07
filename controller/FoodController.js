const Foods = require("../foods/foods");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const getFoods = (req, res) => {
  Foods.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      res.json({ message: "success", data: data });
    }
  });
};

const createFoods = (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.name);
  console.log(JSON.stringify(req.body.name));
  let newFoods = new Foods({
    _id: new mongoose.Types.ObjectId(),
    discount: req.body.discount,
    sales: req.body.sales,
    category_id: req.body.category_id,
    name: req.body.name,
    price: req.body.price,
    portion: req.body.portion,
    stock: req.body.stock,
    image: req.body.image,
    tumb_img: req.body.tumb_img,
    ingredients: req.body.ingredients,
    category: req.body.category,
  });
  newFoods
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
};

const deleteFoods = (req, res) => {
  console.log(req.params.id);
  Foods.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      return res.json({ message: "success", data: data });
    })
    .catch((err) => {
      return res.json({ message: "error", data: data });
    });
};

const updateFoods = (req, res) => {
  Foods.findByIdAndUpdate(
    { _id: req.params.id },
    { name: req.body.name, price: req.body.price },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = {
  getFoods,
  createFoods,
  updateFoods,
  deleteFoods,
};
