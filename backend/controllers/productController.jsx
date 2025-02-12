const ProductModel = require("../models/productModel.jsx");

// Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await ProductModel.find({});

  res.json({
    success: true,
    message: "Get products working",
    products,
  });
};

// Get single Product API - /api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
  // console.log(req.params.id, 'ID');

  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      message: "Get single product working",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, message: "Data not found" });
  }
};
