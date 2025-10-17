const Application = require("../models/ApplicationModel");

// POST: submit a new application
exports.submitApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// GET: fetch all applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ submittedAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};
