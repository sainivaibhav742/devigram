const express = require("express");
const { body, validationResult } = require("express-validator");
const { submitApplication, getApplications } = require("../controllers/applyController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.options("/", (req, res) => {
  // CORS preflight support on Vercel/Serverless
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).end();
});

router.post(
  "/",
  [
    body("firstName")
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("First name must be 2-50 characters")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("First name can only contain letters and spaces"),
    body("lastName")
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("Last name must be 2-50 characters")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Last name can only contain letters and spaces"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Valid email is required"),
    body("phone")
      .optional()
      .isLength({ min: 10, max: 15 })
      .matches(/^[\d\s\-\+\(\)]+$/)
      .withMessage("Valid phone number required"),
    body("program")
      .notEmpty()
      .isLength({ min: 2, max: 100 })
      .withMessage("Program selection is required"),
    body("experience")
      .optional()
      .isLength({ max: 500 })
      .withMessage("Experience description too long"),
    body("goals")
      .optional()
      .isLength({ max: 500 })
      .withMessage("Goals description too long"),
    body("motivation")
      .optional()
      .isLength({ max: 500 })
      .withMessage("Motivation description too long"),
    body("agreeTerms")
      .custom((value) => {
        if (value === true || value === "true" || value === "on" || value === "yes" || value === 1 || value === "1") {
          return true;
        }
        throw new Error("You must agree to terms and conditions");
      }),
    body("agreeMarketing")
      .optional()
      .isBoolean()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    submitApplication(req, res);
  }
);
router.get("/", authMiddleware, getApplications);

module.exports = router;
