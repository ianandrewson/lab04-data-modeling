const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  amp: {
    type: Number,
    required: true,
    min: 1
  },
  oscillators: {
    type: Number,
    required: true,
    min: 1
  },
  power: {
    type: String,
    enum: ['yes', 'Yes', 'Powered', 'powered', 'has power'],
    required: true
  }, 
  manufacturer: {
    type: String
  }
});

module.exports = mongoose.model('Synth', schema);
