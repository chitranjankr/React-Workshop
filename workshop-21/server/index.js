const express = require("express");
const Authuser = require("./authModel");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
require('dotenv').config()
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const DB ='mongodb+srv://chitranjan11:chitranjan@cluster0.nfr8g.mongodb.net/login?retryWrites=true&w=majority'
PORT=5000
mongoose
  .connect(DB)
  .then(console.log("mongo connected"))
  .catch((err) => console.log(err));

app.post("/create-user", cors(), async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const saveUser = new Authuser({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashed,
    });
    const user = await saveUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/login-user", cors(), async (req, res) => {
  try {
    const user = await Authuser.findOne({ email: req.body.email });
    if (user == null) {
      res.status(404).json("user not found");
    } else {
      const validate = await bcrypt.compare(req.body.password, user.password);
      if (!validate) {
        res.status(400).json("wrong password");
      } else
        jwt.sign({ user }, process.env.ACCESS_TOKEN, (err, token) => {
          res.status(200).send({
            AccessToken: token,
          });
        });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

const tokenVerification = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(500);
  }
};

app.get("/validate-user", tokenVerification, (req, res) => {
  jwt.verify(req.token, process.env.ACCESS_TOKEN, (err, encoded) => {
    if (err) {
      res.json(false);
    } else {
      res.json(true);
    }
  });
});
app.get("/", (req, res) => {
  res.send("This is the home Page")
})
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
