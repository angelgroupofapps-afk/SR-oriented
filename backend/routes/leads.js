const express = require("express");
const Lead = require("../models/Lead");

const router = express.Router();

router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

router.post("/", async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.json(lead);
});

module.exports = router;
