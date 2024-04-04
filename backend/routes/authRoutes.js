const express = require("express"); // Importing Express framework
const router = express.Router(); // Creating a router instance
const { signup, login } = require("../controllers/authControllers"); // Importing signup and login controller functions

// Routes beginning with /api/auth
router.post("/signup", signup); // Route for user signup
router.post("/login", login); // Route for user login

module.exports = router; // Exporting the router for use in other files
