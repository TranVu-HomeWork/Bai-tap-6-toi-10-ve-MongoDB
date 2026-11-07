const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    isReleased: {
      type: Boolean,
      default: false
    },
    genres: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Movie', movieSchema);