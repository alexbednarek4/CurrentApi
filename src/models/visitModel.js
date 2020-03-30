// Create model for visit checkins
const { mongoose } = require('mongoose');
const { validator } = require('validator');

/**
 * userId = user submitting location
 * name = location name
 * visitId = unique location indicator
 */

const Visit = mongoose.model('Visit', {
  userId: {
    type: String,
    require: true,
    trim: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  visitId: {
    type: Number,
  },
});

module.exports = Visit;
