const Review = require("../models/Review.js");
const Product = require("../models/Product.js");
const { ROLES } = require("../utils/constants.js");

//* CreateReview Function
const createReview = async (req, res) => {
  if (req.role !== ROLES.user)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const userId = req.id;
    const { productId, review, rating } = req.body;

    const newReview = await Review.create({
      productId,
      review,
      rating,
      userId,
    });

    await newReview.populate("userId", "name");

    const product = await Product.findByIdAndUpdate(productId, {
      $push: { reviews: newReview._id },
    });

    await product.calculateRating();

    return res.status(201).json({
      success: true,
      message: "Thanks for the review!",
      data: newReview,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* UpdateReview Function
const updateReview = async (req, res) => {
  if (req.role !== ROLES.user)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { id } = req.params;
    const { updatedReview } = req.body;

    const review = await Review.findByIdAndUpdate(id, { review: updateReview });

    if (!review)
      return res
        .status(404)
        .json({ success: false, message: "Review not found!" });

    await review.populate("userId", "name");

    return res.status(200).json({
      success: true,
      message: "Review updated successfully!",
      data: review,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* ReplyReview Function
const replyReview = async (req, res) => {
  if (req.role !== ROLES.user)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const userId = req.id;
    const { id } = req.params;
    const { review } = req.body;

    const foundReview = await Review.findByIdAndUpdate(
      id,
      {
        $push: { replies: { userId, review } },
      },
      { new: true }
    )
      .populate("replies.userId", "name")
      .populate("userId", "name");

    if (!foundReview)
      return res
        .status(404)
        .json({ success: false, message: "Review not found!" });

    return res.status(200).json({
      success: true,
      message: "Reply added successfully!",
      data: foundReview,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* DeleteReview Function
const deleteReview = async (req, res) => {
  if (req.role !== ROLES.user)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review)
      return res
        .status(404)
        .json({ success: false, message: "Review not found!" });

    const product = await Product.findByIdAndUpdate(review.productId, {
      $pull: { reviews: review._id },
    });

    await product.calculateRating();

    return res.status(200).json({ success: true, message: "Review Deleted!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* GetReviews Function
const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ productId })
      .populate("userId", "name")
      .populate("replies.userId", "name");

    if (!reviews.length)
      return res
        .status(404)
        .json({ success: false, message: "Reviews not found!" });

    return res
      .status(200)
      .json({ success: true, message: "Reviews found!", data: reviews });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviews,
  replyReview,
};
