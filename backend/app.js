const expressJS = require('express');
const mongoose = require('mongoose');
const User = require("./schemas/user");
const Log = require("./schemas/data");
const expressApp = expressJS();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

let thisMonth = 6;
let dayOfMonth = 22;

//Database name provided
//Name of collection is a plural of model
mongoose.connect("mongodb+srv://User:7gBwopfErUz16uqi@cluster0-s5mhj.mongodb.net/bee-smart?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Connection failed")
});

//uses a middleware on an incoming request
expressApp.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  next();
});

expressApp.get('/api/personal', (request, response, next) => {
  User.find()
    .then(documents => {
      response.status(200).json(documents);
    });
});

expressApp.get('/api/stats', (request, response, next) => {
  Log.find({"timestamp": {$gte: new Date(2019,thisMonth-1,dayOfMonth-1,2,0,0).toISOString()}})
  .sort({timestamp: 1})
    .then(documents => {
      response.status(200).json(documents);
    });
});

expressApp.get('/api/today-stats', (request, response, next) => {
  Log.find({"timestamp": {$gte: new Date(2019,thisMonth-1,dayOfMonth,2,0,0).toISOString()}})
  .sort({timestamp: 1})
    .then(documents => {
      response.status(200).json(documents);
    });
});

expressApp.get('/api/monthly-stats', (request, response, next) => {
  Log.find({"timestamp": {$gte: new Date(2019,thisMonth-1,1,2,0,0).toISOString()}})
  .sort({timestamp: 1})
    .then(documents => {
      response.status(200).json(documents);
    });
});

module.exports = expressApp;
