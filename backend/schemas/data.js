const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  userID: String,
  hiveID: String,
  timestamp: Date,
  temperature: Number,
  humidity: Number,
  acoustics: Number,
  carbonDioxide: Number
});

module.exports = mongoose.model('log', dataSchema);
