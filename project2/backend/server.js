import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = 5000;

// ------------------------------------
// ES Module __dirname replacement
// ------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------------------
// Middleware
// ------------------------------------
app.use(cors());
app.use(express.json());

// ------------------------------------
// User JSON file
// ------------------------------------
const usersFile = path.join(__dirname, "user.json");

// ------------------------------------
// Read users
// ------------------------------------
function getUsers() {
  try {
    const data = fs.readFileSync(usersFile, "utf8");

    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading user.json:", error);

    return {
      users: []
    };
  }
}

// ------------------------------------
// Save users
// ------------------------------------
function saveUsers(data) {
  fs.writeFileSync(
    usersFile,
    JSON.stringify(data, null, 2),
    "utf8"
  );
}

// ------------------------------------
// Test backend
// ------------------------------------
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running successfully"
  });
});

// ------------------------------------
// LOGIN
// ------------------------------------
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const data = getUsers();

  const user = data.users.find(
    (item) =>
      item.email.toLowerCase() === email.toLowerCase() &&
      item.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful",

    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  });
});

// ------------------------------------
// SIGN UP
// ------------------------------------
app.post("/api/signup", (req, res) => {
  const {
    username,
    email,
    password
  } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  const data = getUsers();

  const existingUser = data.users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "An account with this email already exists"
    });
  }

  const newUser = {
    id:
      data.users.length > 0
        ? Math.max(
            ...data.users.map((user) => user.id)
          ) + 1
        : 1,

    username,
    email,
    password
  };

  data.users.push(newUser);

  saveUsers(data);

  return res.status(201).json({
    success: true,
    message: "Account created successfully",

    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    }
  });
});

// ------------------------------------
// GET USER
// ------------------------------------
app.get("/api/user/:id", (req, res) => {
  const userId = Number(req.params.id);

  const data = getUsers();

  const user = data.users.find(
    (item) => item.id === userId
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  return res.json({
    success: true,

    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  });
});

// ------------------------------------
// Start server
// ------------------------------------
app.listen(PORT, () => {
  console.log(
    `Backend running on http://localhost:${PORT}`
  );
});