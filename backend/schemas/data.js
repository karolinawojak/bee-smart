const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  user_id: String,
  hive_id: String,
  timestamp: Date,
  temperature: Number,
  humidity: Number,
  carbon_dioxide: Number,
  acoustics: Number
});

module.exports = mongoose.model('data', dataSchema);
