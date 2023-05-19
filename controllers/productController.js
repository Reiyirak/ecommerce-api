const createProduct = async (req, res) => {
  res.send("Create product");
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
