const Testimonial = require("../models/testimonial.model");

const createTestimonial = async (req, res, next) => {
  try {
    const { author, body } = req.body;

    const testimonial = await Testimonial.create({ author, body });

    console.log(testimonial);
    return res.status(201).render("testimonial", {
      testimonial: testimonial.body
    });
  } catch (error) {
    next(error);
  }
};

const getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find();
    console.log(testimonials);

    return res.status(200).render("testimonials", {
      testimonials
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTestimonial, getAllTestimonials };
