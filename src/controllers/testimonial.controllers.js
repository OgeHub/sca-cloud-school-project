const Testimonial = require("../models/testimonial.model");

const createTestimonial = async (req, res, next) => {
  try {
    const { author, experience } = req.body;
    console.log(author, experience);

    const testimonial = new Testimonial({
      author,
      experience
    });
    await testimonial.save();

    const { yourExperience } = testimonial;
    return res.status(201).render("testimonial");
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
