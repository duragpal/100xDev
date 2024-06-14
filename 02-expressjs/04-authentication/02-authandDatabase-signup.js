const jwt = require("jsonwebtoken");
const express = require("express");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
mongoose.connect(
  "mongodb+srv://testuser:xxxxx@cluster0.kytvjta.mongodb.net/userappnew",
);

const User = new mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exist.");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({ msg: "user created successfully!" });
});
