const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const leadRoutes = require("./routes/leads");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sroriented", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
