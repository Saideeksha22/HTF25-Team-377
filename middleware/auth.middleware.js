const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, "jaiho");
      if (decoded) {
        req.user = decoded;
        next();
      } else {
        res.status(401).json({ msg: "User not authorized!" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ msg: "Please login!" });
  }
};

module.exports = { auth };
