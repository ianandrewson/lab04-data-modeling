const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  isCold: {
    required: true,
    type: Boolean
  },
  shape: {
    type: String,
    required: true
  }
});

module.exports = new mongoose.model('IceCube', schema);
