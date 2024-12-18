// const jwt = require("jsonwebtoken");
// require("dotenv").config();
// const isAuth = async (req, res, next) => {
// try {
// const token = req.header("Authorization")?.split(" ")[1];// Assuming Bearer token
// if (!token) {
// return res.status(401).json({ msg: "No token, authorization denied" });
// }
// const decoded = jwt.verify(token, process.env.JWT_SECRET);
// req.user = decoded; // Add decoded token (user info) to request object
// next();
// } catch (error) {
// if (error.name === "TokenExpiredError") {
// res.status(401).json({ msg: "Token expired" });
// } else {
//     res.status(500).json({ msg: "Server error" });
//     }
//     }
//     };
//     module.exports = isAuth;

const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  try {
    // Extract token from the "Authorization" header
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Authorization token is missing or malformed" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "No token provided, authorization denied" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user information to the request object

    // Proceed to the next middleware
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token expired, please log in again" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ msg: "Invalid token, authorization denied" });
    } else {
      return res.status(500).json({ msg: "Server error during authentication" });
    }
  }
};

module.exports = isAuth;
