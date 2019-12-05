const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  doors: {
    type: Number,
    required: true,
    min: 2,
    max: 4
  },
  engine: {
    type: Number,
    required: true,
    max: 1,
    min: 1
  },
  functional: {
    type: Boolean,
  }
});

module.exports = mongoose.model('Car', schema);
