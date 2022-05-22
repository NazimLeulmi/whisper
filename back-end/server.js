const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const validation = require("./validation");
const models = require("./models");
const bcrypt = require("bcrypt");
const session = require("express-session");

let app = express();

// app.use(cors({
//   origin: ["http://localhost:8888", "http://192.168.1.131:3000", "http://192.168.1.131"],
//   credentials: true
// }));
app.use(express.json());

app.use(
  session({
    secret: "my very important session secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 8 },
  })
);

// Mongo Database Connection
connectDB().catch((err) => console.log(err));
async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/whisper");
  console.log("Connected to Mongo Database");
}

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { isValid, errors } = validation.validateSignUp(req.body);
  if (!isValid) return res.json({ isValid, errors });
  try {
    const { username, email, passwordc, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const userModel = new models.UserModel({
      name: username,
      email: email,
      password: hash,
      passwordc: passwordc,
    });
    const userEntry = await userModel.save().catch((err) => console.log(err));
    console.log("Registered", userEntry);
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.json({ success: false });
  }
});

app.listen(8888, () => console.log("Node.js server running on port 8888"));
