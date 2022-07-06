const mongoose = require("mongoose");
const { Schema } = mongoose;

const notificationSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true }, // user || group
    group_name: { type: String, required: false },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const contactSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, required: true }, // user || group
    group_name: { type: String, required: false },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const msgSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    avatar: { type: String },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    approved: { type: Boolean, default: false },
    status: { type: String },
    avatar: { type: String },
    contacts: [contactSchema],
    notifications: [notificationSchema],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
const MsgModel = mongoose.model("Msg", msgSchema);

module.exports = { UserModel, MsgModel };
