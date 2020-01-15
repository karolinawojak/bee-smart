const expressJS = require('express');

const expressApp = expressJS();

//uses a middleware on an incoming request
expressApp.use('api/', (request, response, next) => {
  response.send('Sth');
});

module.exports = expressApp;
