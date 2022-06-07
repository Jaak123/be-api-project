const Category = require("../category/category");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const category = require("../category/category");

const getCategories = (req, res, next) => {
  Category.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      res.json({ message: "success", data: data });
    }
  });
};

const createCategory = (req, res, next) => {
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
    .catch(next);
};

const updateCategory = (req, res, next) => {
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
};
const deleteCategory = (req, res, next) => {
  console.log(req.params.id);
  Category.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      return res.json({ message: "success", data1: data });
    })
    .catch((err) => {
      return res.json({ message: "error", data2: data });
    });
};
module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
