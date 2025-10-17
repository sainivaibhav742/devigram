const mongoose = require("mongoose");
const Admin = require("../models/AdminModel");
const crypto = require("crypto");
require("dotenv").config();

const updateAdminPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Generate a strong password
    const newPassword = crypto.randomBytes(12).toString('base64');
    
    // Update admin password
    const admin = await Admin.findOne({ username: "admin" });
    if (!admin) {
      console.log("Admin user not found");
      process.exit(1);
    }

    admin.password = newPassword;
    await admin.save();
    
    console.log("✅ Admin password updated successfully!");
    console.log("🔐 New credentials:");
    console.log(`   Username: admin`);
    console.log(`   Password: ${newPassword}`);
    console.log("");
    console.log("⚠️  IMPORTANT: Save these credentials securely!");
    console.log("   Update your frontend login or create a new admin user.");
    
    process.exit(0);
  } catch (error) {
    console.error("Error updating admin password:", error);
    process.exit(1);
  }
};

updateAdminPassword();