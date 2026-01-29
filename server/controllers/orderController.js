const Order = require("../models/Order.js");
const User = require("../models/User.js");
const { ROLES } = require("../utils/constants.js");

const getOrdersByUserId = async (req, res) => {
  try {
    const userId = req.id;

    const orders = await Order.find({ userId }).populate(
      "products.id",
      "name price category images"
    );

    if (!orders.length)
      return res
        .status(404)
        .json({ success: false, message: "No orders to show!" });

    return res.status(200).json({ success: true, data: orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* GetAllOrders Function
const getAllOrders = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;

    const orders = await Order.find()
      .populate("products.id", "name price category images")
      .populate("userId", "name email")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    if (!orders.length)
      return res
        .status(404)
        .json({ success: false, message: "Orders not found!" });

    const totalOrders = orders.length;
    const totalPages = Math.ceil(totalOrders / limit);

    return res.status(200).json({
      success: true,
      data: orders,
      pagination: {
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* UpdateOrderStatus Function
const updateOrderStatus = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { paymentId } = req.params;
    const { status } = req.body;

    const order = await Order.findOneAndUpdate(
      { razorpayPaymentId: paymentId },
      { status },
      { new: true }
    );

    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found!" });

    return res
      .status(200)
      .json({ success: true, message: "Order status updated!", data: order });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//* GetMetrics Function
const getMetrics = async (req, res) => {
  if (req.role !== ROLES.admin)
    return res.status(401).json({ success: false, message: "Access Denied!" });

  try {
    const { startDate, endDate } = req.query;

    const start = new Date(
      startDate || new Date().setMonth(new Date().getMonth() - 1)
    );
    const end = new Date(endDate || new Date());

    //* Calculate total sales
    const ordersInRange = await Order.find({
      createdAt: { $gte: start, $lte: end },
    });
    const totalSales = ordersInRange.reduce(
      (acc, order) => acc + order.amount,
      0
    );

    //* Calculate this month's orders
    const thisMonthOrders = ordersInRange;

    //* Get the last month
    const lastMonth = new Date().setMonth(new Date().getMonth() - 1);

    //* Calculate last month's orders
    const lastMonthOrders = await Order.find({
      createdAt: { $gte: lastMonth },
    });

    //* Calculate total amount of last month's orders
    const lastMonthTotalSales = lastMonthOrders.reduce(
      (acc, order) => acc + order.amount,
      0
    );

    //* Calculate growth
    const salesGrowth = lastMonthTotalSales
      ? ((totalSales - lastMonthTotalSales) / lastMonthTotalSales) * 100
      : 0;

    //* Calculate users
    const thisMonthUsers = await User.find({
      createdAt: { $gte: start, $lte: end },
    });

    const lastMonthUsers = await User.find({
      createdAt: { $gte: lastMonth },
    });

    const usersGrowth = lastMonthUsers.length
      ? ((thisMonthUsers.length - lastMonthUsers.length) /
          lastMonthUsers.length) *
        100
      : 0;

    //* Calculate last hour orders
    const lastHour = new Date(new Date().setHours(new Date().getHours() - 1));

    const lastHourOrders = await Order.find({ createdAt: { $gte: lastHour } });

    //* Calculate previous day orders
    const previousDayOrders = await Order.find({
      createdAt: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    });

    const lastHourGrowth = previousDayOrders.length
      ? (lastHourOrders.length / previousDayOrders.length) * 100
      : 0;

    //* Recent Sales
    const recentOrders = await Order.find()
      .populate("userId", "name email")
      .sort({ createdAt: -1 })
      .limit(9);

    //* Products delivered in last 6 months with their category and count according to month
    const sixMonthsAgo = new Date(
      new Date().setMonth(new Date().getMonth() - 6)
    );

    const sixMonthOrders = await Order.find({
      createdAt: { $gte: sixMonthsAgo },
    }).populate("products.id", "category");

    //* Get them month wise like {Jan: {keyboard: 5, mouse: 3}}
    const monthWise = sixMonthOrders.reduce((acc, order) => {
      const month = new Date(order.createdAt).toLocaleString("default", {
        month: "short",
      });

      if (!acc[month]) acc[month] = {};

      order.products.forEach((product) => {
        if (!acc[month][product.id.category])
          acc[month][product.id.category] = 1;
        else acc[month][product.id.category]++;
      });

      return acc;
    });

    return res.status(200).json({
      success: true,
      data: {
        totalSales: {
          count: totalSales,
          growth: salesGrowth,
        },
        users: {
          count: thisMonthUsers.length,
          growth: usersGrowth,
        },
        activeNow: {
          count: lastHourOrders.length,
          growth: lastHourGrowth,
        },
        recentSales: {
          count: lastMonthTotalSales,
          users: recentOrders,
        },
        sixMonthBarChartData: monthWise,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getOrdersByUserId,
  getAllOrders,
  updateOrderStatus,
  getMetrics,
};
