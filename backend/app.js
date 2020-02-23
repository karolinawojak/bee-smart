const expressJS = require('express');
const mongoose = require('mongoose');

const expressApp = expressJS();

const User = require('./schemas/user.js');

mongoose.connect('mongodb://localhost/bee_smart')
  .then(() => {
    console.log('Connected')
  });

console.log(User.findOne({_id: 'frrddd5eff'}));

//uses a middleware on an incoming request
expressApp.use('api/', (request, response, next) => {
  response.send('Sth');
});

module.exports = expressApp;
