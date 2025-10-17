const mongoose = require("mongoose");
const Admin = require("../models/AdminModel");
require("dotenv").config();

const createDefaultAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const existingAdmin = await Admin.findOne({ username: "admin" });
    if (existingAdmin) {
      console.log("Default admin already exists");
      process.exit(0);
    }

    const admin = new Admin({
      username: "admin",
      email: "admin@devigram.com",
      password: "admin123"
    });

    await admin.save();
    console.log("Default admin created successfully!");
    console.log("Username: admin");
    console.log("Password: admin123");
    
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createDefaultAdmin();