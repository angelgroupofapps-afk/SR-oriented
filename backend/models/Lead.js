const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: String,
  createdBy: String
});

module.exports = mongoose.model("Lead", LeadSchema);
