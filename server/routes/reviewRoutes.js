const router = require("express").Router();
const {
  createReview,
  updateReview,
  replyReview,
  deleteReview,
  getReviews,
} = require("../controllers/reviewController");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.post("/create-review", verifyToken, createReview);
router.put("/update-reveiw/:id", verifyToken, updateReview);
router.put("/reply-review/:id", verifyToken, replyReview);
router.delete("/delete-review/:id", verifyToken, deleteReview);
router.get("/reviews/:productId", getReviews);
module.exports = router;
