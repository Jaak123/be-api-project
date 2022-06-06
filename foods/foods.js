const mongoose = require("mongoose");
const FoodsSchema = mongoose.Schema({
  sales: {
    type: Boolean,
  },
  _id: {
    type: String,
  },
  category_id: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  portion: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  ingredients: {
    type: String,
  },
  discount: {
    type: Number,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  tumb_img: {
    type: String,
  },
});
module.exports = mongoose.model("Foods", FoodsSchema);
