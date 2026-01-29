const router = require("express").Router();
const {
  getOrdersByUserId,
  getAllOrders,
  getMetrics,
  updateOrderStatus,
} = require("../controllers/orderController.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.get("/orders-by-user-id", verifyToken, getOrdersByUserId);
router.get("/all-orders", verifyToken, getAllOrders);
router.get("/metrics", verifyToken, getMetrics);
router.put("/update-order-status/:paymentId", verifyToken, updateOrderStatus);

module.exports = router;
