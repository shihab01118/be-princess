require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4lkgu.mongodb.net/`
  )
  .then(() => console.log("Database Connected Successfully!"))
  .catch((error) => console.error(error));

const app = express();
const PORT = process.env.PORT || 5000;

// default middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "server is working fine" });
});

app.listen(PORT, () => console.log("server is running on port: ", PORT));
