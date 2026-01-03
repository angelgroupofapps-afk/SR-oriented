const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET = "SRORIENTED_SECRET";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ msg: "Invalid login" });

  const token = jwt.sign({ id: user._id, role: user.role }, SECRET);
  res.json({ token, role: user.role });
});

module.exports = router;
