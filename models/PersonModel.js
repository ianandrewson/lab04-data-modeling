const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  moralCompass: {
    required: true,
    type: Boolean
  },
  soul: {
    type: Boolean,
    required: true
  },
  stomachs: {
    type: Number,
    required: true,
    min: 1,
    max: 1
  }
});

module.exports = new mongoose.model('Person', schema);
