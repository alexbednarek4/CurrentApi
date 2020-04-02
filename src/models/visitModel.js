// Create model for visit checkins
const mongoose = require('mongoose');
const validator = require('validator');

/**
 * userId = user submitting location
 * name = location name
 * visitId = unique location indicator, mongo creates this
 */

const Visit = mongoose.model('Visit', {
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  visitId: {
    type: Number,
  },
});

module.exports = Visit;
