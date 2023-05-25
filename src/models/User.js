const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 16,
    },
    email: {
      type: String,
      unique: true,
    },
    // active: {
    //   type: Boolean,
    //   default: true,
    // }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
