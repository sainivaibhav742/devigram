const mongoose = require("mongoose");
const Admin = require("../models/AdminModel");
require("dotenv").config();

const createDefaultAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminEmail = process.env.ADMIN_EMAIL || "admin@devigram.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    const existingAdmin = await Admin.findOne({ 
      $or: [{ username: adminUsername }, { email: adminEmail }]
    });
    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const admin = new Admin({
      username: adminUsername,
      email: adminEmail,
      password: adminPassword
    });

    await admin.save();
    console.log("Admin created successfully!");
    console.log(`Username: ${adminUsername}`);
    console.log(`Email: ${adminEmail}`);
    
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createDefaultAdmin();