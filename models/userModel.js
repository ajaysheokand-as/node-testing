const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  userAddress: {
    type: String,
  },
});

module.exports = mongoose.model("userModel", userSchema);
