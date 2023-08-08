const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true
    },

    experience: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
module.exports = Testimonial;
