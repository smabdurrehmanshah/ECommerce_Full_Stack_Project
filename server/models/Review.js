const mongoose = require("mongoose");

const replySchema = mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const reviewSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    replies: [replySchema],
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;