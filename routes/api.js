const Category = require("../category/category");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CategoryController = require("../controller/CategoryController");

router.delete("/category/:id", CategoryController.deleteCategory);
router.get("/category", CategoryController.getCategories);
router.post("/category", CategoryController.createCategory);
router.post("/categories/:id", CategoryController.updateCategory);

module.exports = router;
