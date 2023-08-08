const express = require("express");
const testimonialControllers = require("../controllers/testimonial.controllers");

const router = express.Router();

router.post("/create", testimonialControllers.createTestimonial);
router.get("/all", testimonialControllers.getAllTestimonials);

module.exports = router;
