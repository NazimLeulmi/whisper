const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  approved: { type: Boolean, default: false },
  avatar: { type: String },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel, ProcessorModel };
