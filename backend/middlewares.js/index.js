const jwt = require("jsonwebtoken"); // Importing JSON Web Token library
const User = require("../models/User"); // Importing User model
const { ACCESS_TOKEN_SECRET } = process.env; // Accessing environment variable for token secret

// Middleware function to verify the access token
exports.verifyAccessToken = async (req, res, next) => {
  const token = req.header("Authorization"); // Extracting token from request header

  // Checking if token exists
  if (!token) return res.status(400).json({ status: false, msg: "Token not found" });

  let user;
  try {
    // Verifying the token using the secret key
    user = jwt.verify(token, ACCESS_TOKEN_SECRET);
  }
  catch (err) {
    // Handling invalid token error
    return res.status(401).json({ status: false, msg: "Invalid token" });
  }

  try {
    // Finding the user by ID from the decoded token
    user = await User.findById(user.id);
    if (!user) {
      return res.status(401).json({ status: false, msg: "User not found" });
    }

    // Adding the user object to the request for further processing
    req.user = user;
    next(); // Proceeding to the next middleware or route handler
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}
