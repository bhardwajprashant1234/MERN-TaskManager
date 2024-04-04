const express = require("express"); // Importing Express framework
const router = express.Router(); // Creating a router instance
const { getTasks, getTask, postTask, putTask, deleteTask } = require("../controllers/taskControllers"); // Importing task controller functions
const { verifyAccessToken } = require("../middlewares.js"); // Importing middleware for token verification

// Routes beginning with /api/tasks
router.get("/", verifyAccessToken, getTasks); // Route to get all tasks
router.get("/:taskId", verifyAccessToken, getTask); // Route to get a specific task by ID
router.post("/", verifyAccessToken, postTask); // Route to create a new task
router.put("/:taskId", verifyAccessToken, putTask); // Route to update a task by ID
router.delete("/:taskId", verifyAccessToken, deleteTask); // Route to delete a task by ID

module.exports = router; // Exporting the router for use in other files
