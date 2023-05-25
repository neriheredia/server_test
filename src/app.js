const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/v1", require("./routes/v1"));

// app.use("/api/v1", require("./routes"));

module.exports = app;
