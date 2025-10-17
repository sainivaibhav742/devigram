const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  submitApplication,
  getApplications,
} = require("../controllers/applyController");
const router = express.Router();

// Application submission route with validation
router.post(
  "/",
  [
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("email").isEmail(),
    body("phone").notEmpty(),
    body("education").notEmpty(),
    body("experience").notEmpty(),
    body("program").notEmpty(),
    body("goals").notEmpty(),
    body("motivation").notEmpty(),
    body("availability").notEmpty(),
    body("agreeTerms").equals("true"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    submitApplication(req, res);
  }
);

// Route to get all applications
router.get("/", getApplications);

module.exports = router;
