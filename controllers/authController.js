const User = require("../models/User");
const CustomError = require("../errors");
require("dotenv").config();
const { attachCookiesToResponse } = require("../utils");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }

  // Alternative setup for the first account to be admin
  // const isFirstAccount = (await User.countDocuments({})) === 0;
  // const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password });
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  attachCookiesToResponse({ res, user: tokenUser });

  // res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const login = async (req, res) => {
  res.send("login user");
};

const logout = async (req, res) => {
  res.send("logout user");
};

module.exports = {
  register,
  login,
  logout,
};
