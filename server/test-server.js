const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Server is working!" });
});

// Simple admin login without database
app.post("/admin/login", (req, res) => {
  console.log("Login request received:", req.body);
  const { username, password } = req.body;
  
  if (username === "admin" && password === "admin123") {
    console.log("Login successful for:", username);
    res.json({
      message: "Login successful",
      token: "test-token-123",
      admin: {
        id: "1",
        username: "admin",
        email: "admin@devigram.com",
        role: "admin"
      }
    });
  } else {
    console.log("Login failed for:", username);
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Mock applications route
app.get("/apply", (req, res) => {
  res.json([]);
});

const PORT = 5001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server running on http://localhost:${PORT}`);
  console.log(`Admin login endpoint: http://localhost:${PORT}/admin/login`);
});