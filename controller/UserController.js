const User = require("../users/users");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const getUser = (req, res) => {
  User.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      res.json({ message: "success", data: data });
    }
  });
};

const createUser = (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.name);
  console.log(JSON.stringify(req.body.name));
  let newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    role_id: req.body.role_id,
    created_date: req.body.created_date,
    last_activity: req.body.last_activity,
  });
  newUser
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
const deleteUser = (req, res) => {
  console.log(req.params.id);
  User.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      return res.json({ message: "success", data: data });
    })
    .catch((err) => {
      return res.json({ message: "error", data: data });
    });
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { name: req.body.name, email: req.body.email },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = { getUser, createUser, deleteUser, updateUser };
