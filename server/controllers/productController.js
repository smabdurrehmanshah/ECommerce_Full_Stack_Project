const { ROLES } = require("../utils/constants.js");
const Product = require("../models/Product.js");
const cloudinary = require("../utils/cloudinary.js");

//* CreateProduct Function
const createProduct = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { name, price, description, stock, colors, category } = req.body;

    const uploadImages = [];

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "products",
      });

      uploadImages.push({
        url: result.secure_url,
        id: result.public_id,
      });
    }

    const product = new Product({
      name,
      price,
      description,
      stock,
      colors,
      category,
      images: uploadImages,
    });

    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully!",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* UpdateProduct Function
const updateProduct = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { ...data } = req.body;
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, data, { new: true });

    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* DeleteProduct Function
const deleteProduct = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* GetProducts Function
const getProducts = async (req, res) => {
  try {
    const { page, limit, category, price, search } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 9;

    const query = {};

    if (category)
      query.category = category.charAt(0).toUpperCase() + category.slice(1);

    if (category === "all") delete query.category;

    if (search) query.name = { $regex: search, $options: "i" };

    if (price) query.price = { $lte: price };

    const totalProducts = await Product.coundDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await Product.find(query)
      .select("name price images description rating blacklisted")
      .skip((page - 1) * limit)
      .limit(limit);

    if (!products.length)
      return res
        .status(404)
        .json({ success: false, message: "No products found!" });

    products = products.map((product) => {
      const productObj = product.toObject();
      productObj.image = productObj.images[0].url;
      delete productObj.images;
      return productObj;
    });

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
      pagination: {
        totalProducts,
        totalPages,
        currentPage: page,
        pageSize: limit,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* GetProductByName Function
const getProductByName = async (req, res) => {
  try {
    const { name } = req.params;

    const product = await Product.findOne({ name });

    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });

    return res
      .status(200)
      .json({ success: true, message: "Product found!", data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* BlacklistProduct Function
const blacklistProduct = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(
      id,
      { blacklisted: true },
      { new: true }
    );

    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });

    res.status(200).json({
      success: true,
      message: `The ${product.name} has been blacklisted!`,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* RemoveFromBlacklist Function
const removeFromBlacklist = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(
      id,
      { blacklisted: false },
      { new: true }
    );

    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });

    res.status(200).json({
      success: true,
      message: `The ${product.name} has been removed blacklisted!`,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductByName,
  blacklistProduct,
  removeFromBlacklist,
};
