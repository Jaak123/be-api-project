const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Enter the email"],
  },
  phone: {
    type: Number,
    minimum: 0,
  },
  password: {
    type: String,
    required: [true, "Enter the password!"],
  },
  role_id: {
    type: String,
    enum: ["consumer", "delivery", "admin"],
    default: "consumer",
  },
  created_date: {
    type: Date,
  },
  last_activity: {
    type: Date,
  },
});
module.exports = mongoose.model("User", UserSchema);
