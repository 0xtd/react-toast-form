const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const connectDB = require("./utils/db");
const formRouter = require("./routes/form.routes");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(formRouter);

// testing route
app.get("/test-route", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  connectDB();
});
