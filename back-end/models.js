const mongoose = require("mongoose");
const { Schema } = mongoose;
const notificationSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const msgSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    isText: { type: Boolean, default: true },
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
    contacts: [
      {
        user_name: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, required: true },
      },
    ],
    notifications: [notificationSchema],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
const MsgModel = mongoose.model("Msg", msgSchema);
const NotificationModel = mongoose.model("Notification", notificationSchema);

module.exports = { UserModel, MsgModel };
