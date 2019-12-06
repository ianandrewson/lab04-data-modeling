const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  healthy: {
    type: Boolean,
    required: true
  },
  calories: {
    type: Number,
    required: true,
    min: 500
  }
});

module.exports = mongoose.model('Breakfast', schema);
