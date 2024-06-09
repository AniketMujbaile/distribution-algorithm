const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  currentFlow: {
    type: Number,
    default: 0,
  },
  weight: {
    type: Number,
    default: 1,
  },
  isTop: {
    type: Boolean,
    default: false,
  },
});

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

module.exports = Astrologer;


 