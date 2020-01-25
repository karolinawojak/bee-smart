const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: { type: String, required: true },
  first_login: Date,
  last_login: Date,
  hives: [ {
    _id: { type: String, required: true },
    symbol: { type: Mixed, default: null },
    first_reading: Date
   } ]
});

module.exports = mongoose.model('user', userSchema);
