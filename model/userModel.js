const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
const userModel = model("users", userSchema);
module.exports = userModel;
