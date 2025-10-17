const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  education: String,
  experience: String,
  program: String,
  goals: String,
  motivation: String,
  availability: String,
  agreeTerms: Boolean,
  agreeMarketing: Boolean,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
