//@desc     Register User
//@method   POST api/users
//@access   Public
const registerUser = (req, res) => {
  res.status(200).json({ message: "Register User" });
};

//@desc     Login User
//@method   POST api/users/login
//@access   Public
const loginUser = (req, res) => {
  res.status(200).json({ message: "Login User" });
};

//@desc     Get User Data
//@method   GET api/users/me
//@access   Private
const getMe = (req, res) => {
  res.status(200).json({ message: "Get User Data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};