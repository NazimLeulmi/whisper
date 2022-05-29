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
  const { isValid, errors } = validation.validateSignUp(req.body);
  if (!isValid) return res.json({ isValid, errors });
  try {
    let dupUser = await models.UserModel.findOne({ email: req.body.email });
    if (dupUser)
      return res.json({
        isValid: false,
        errors: { email: "The email has been used by another user" },
      });
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
    return res.json({ isValid: true });
  } catch (error) {
    console.log(error);
    return res.json({ success: false });
  }
});

app.post("/signin", async (req, res) => {
  console.log(req.body, "Sign In Form");
  const { isValid, error } = validation.validateSignIn(req.body.email);
  if (!isValid) return res.json({ isValid, error });
  try {
    const user = await models.UserModel.findOne({ email: req.body.email });
    if (!user)
      return res.json({
        isValid: false,
        error: "The user doesn't exist",
      });
    // The user login data is correct
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect)
      return res.json({
        isValid: false,
        error: "The password is incorrect",
      });
    // if (user.approved === false)
    //   return res.json({
    //     isValid: false,
    //     errors: "The account has to be verified",
    //   });
    req.session.userId = user._id;
    req.session.email = user.email;
    req.session.username = user.name;
    return res.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.name,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/check-auth", async (req, res) => {
  if (req.session.userId) {
    const user = await models.UserModel.findById(req.session.userId);
    if (!user) return res.json({ success: false });
    return res.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } else {
    return res.json({ success: false });
  }
});
app.listen(8888, () => console.log("Node.js server running on port 8888"));
