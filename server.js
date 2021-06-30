const dotenv = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongooDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Connect DB
mongooDB();

// middleware
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server running in port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
