const express = require("express");
const { body, validationResult } = require("express-validator");
const { loginAdmin, verifyToken } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post(
  "/login",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    loginAdmin(req, res);
  }
);

router.get("/verify", authMiddleware, verifyToken);

module.exports = router;