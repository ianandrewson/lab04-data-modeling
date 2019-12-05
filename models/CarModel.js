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
  }
});

module.exports = mongoose.model('Car', schema);
