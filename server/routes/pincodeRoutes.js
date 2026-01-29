const {
  addPincodes,
  getPincode,
} = require("../controllers/pincodeController.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

const router = require("express").Router();

router.post("/add-pincodes", verifyToken, addPincodes);
router.get("/pincode/:pincode", getPincode);

module.exports = router;
