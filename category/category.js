const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name"],
  },
  color: {
    type: String,
    required: [true, "Enter the color"],
  },
});
module.exports = mongoose.model("Category", CategorySchema);
