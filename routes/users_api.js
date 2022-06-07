const User = require("../users/users");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const UserController = require("../controller/UserController");

router.get("/user", UserController.getUser);

router.post("/user", UserController.createUser);

router.delete("/user/:id", UserController.deleteUser);

router.post("/user/:id", UserController.updateUser);

module.exports = router;
