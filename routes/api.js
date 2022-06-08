const Category = require("../category/category");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CategoryController = require("../controller/CategoryController");
const AuthController = require("../controller/AuthController");

router.delete("/category/:id", CategoryController.deleteCategory);
router.get("/category", CategoryController.getCategories);
router.post("/category", CategoryController.createCategory);
router.post("/categories/:id", CategoryController.updateCategory);
router.post("/user/register", AuthController.register);
router.post("/user/login", AuthController.login);

module.exports = router;
