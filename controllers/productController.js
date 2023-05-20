const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const CustomErr = require("../errors");

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  res.send("Get all products");
};

const getSingleProduct = async (req, res) => {
  res.send("Get single product");
};

const updateProduct = async (req, res) => {
  res.send("Update product");
};

const deleteProduct = async (req, res) => {
  res.send("Delete product");
};

const uploadImage = async (req, res) => {
  res.send("Upload image");
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
