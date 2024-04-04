const User = require("../models/User"); // Importing the User model
const bcrypt = require("bcrypt"); // Importing bcrypt for password hashing
const { createAccessToken } = require("../utils/token"); // Importing token creation function
const { validateEmail } = require("../utils/validation"); // Importing email validation function
const { sendWelcomeEmail, sendCancellationEmail } = require("../email/account"); // Importing email sending functions

// Signup endpoint to register a new user
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Extracting user details from request body

    // Checking if required fields are empty
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    // Checking if input values are strings
    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      return res.status(400).json({ msg: "Please send string values only" });
    }

    // Checking password length
    if (password.length < 4) {
      return res.status(400).json({ msg: "Password length must be at least 4 characters" });
    }

    // Validating email format
    if (!validateEmail(email)) {
      return res.status(400).json({ msg: "Invalid Email" });
    }

    // Checking if email is already registered
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "This email is already registered" });
    }

    // Hashing the password before storing in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword }); // Creating the user in the database
    await sendWelcomeEmail(email, name); // Sending welcome email to the user
    res.status(200).json({ msg: "Congratulations!! Account has been created for you.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

// Login endpoint to authenticate a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extracting login credentials from request body

    // Checking if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ status: false, msg: "Please enter all details!!" });
    }

    // Finding the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ status: false, msg: "This email is not registered!!" });

    // Comparing hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ status: false, msg: "Password incorrect!!" });

    // Generating access token for authentication
    const token = createAccessToken({ id: user._id });
    delete user.password; // Removing password from user object in response
    res.status(200).json({ token, user, status: true, msg: "Login successful.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}
