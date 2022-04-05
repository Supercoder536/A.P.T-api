const userSchema = require("../models/userSchema.js");
const asynchandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = async (id) => {
  const token = await jwt.sign(id, process.env.JWT_SECRET);
  return token;
};

//@desc     Register User
//@method   POST api/users
//@access   Public
const registerUser = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Invalid Request");
  }
  const user = await userSchema.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const createdUser = await userSchema.create({
    name,
    email,
    password: hashedPassword,
  });
  const token = await generateToken({ id: createdUser._id });
  res.status(200).json({ user: createdUser, token: token });
});

//@desc     Login User
//@method   POST api/users/login
//@access   Public
const loginUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Invalid Request");
  }
  const user = await userSchema.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("No such User");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(400);
    throw new Error("Invalid Password");
  }
  const token = await generateToken({ id: user._id });
  res.status(200).json({ name: user.name, email: user.email, token });
});

//@desc     Get User Data
//@method   GET api/users/me
//@access   Private
const getMe = asynchandler(async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
