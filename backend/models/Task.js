const mongoose = require("mongoose"); // Importing Mongoose library

// Defining the schema for tasks
const taskSchema = new mongoose.Schema({
  user: { // User who owns the task
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User", // Name of the referenced model
    required: true // User ID is required
  },
  description: { // Description of the task
    type: String, // Data type is string
    required: true, // Description is required
  },
}, {
  timestamps: true // Automatically add createdAt and updatedAt timestamps
});

// Creating the Task model using the taskSchema
const Task = mongoose.model("Task", taskSchema);

module.exports = Task; // Exporting the Task model
