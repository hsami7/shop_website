// server.js

const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database("your_shop.db");

// Create users table
db.run(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)"
);

// Create products table
db.run(
  "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, title TEXT, price REAL, category TEXT)"
);

app.use(express.json());

// Sign up endpoint
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  // Hash the password (you would typically use a more secure method)
  const hashedPassword = password;

  // Insert user into the database
  db.run(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.json({ message: "User signed up successfully." });
    }
  );
});

// Sign in endpoint
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  // Query the user from the database
  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (row) {
        res.json({ message: "User signed in successfully." });
      } else {
        res.status(401).json({ error: "Invalid username or password." });
      }
    }
  );
});

// Run the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
