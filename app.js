require("dotenv").config();
const path = require("path");
const express = require("express");
const ejs = require("ejs");

const testimonialRoute = require("./routes/testimonial.route");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/enter-testimonial", (req, res) => {
  res.render("testimonialForm");
});
app.use("/testimonials", testimonialRoute);

app.use((err, req, res, next) => {
  console.log(err.name);

  res.status(500).json({
    status: "fail",
    message: err.message
  });
});

module.exports = app;
