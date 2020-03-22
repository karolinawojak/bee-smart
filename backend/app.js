const expressJS = require('express');
const mongoose = require('mongoose');
const User = require("./schemas/user");
const expressApp = expressJS();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

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
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

expressApp.use('/api/personal', (request, response, next) => {
  // const personalData = [
  //   { id: 'f4wfr',
  //   firstVisit: new Date('2019-04-09T18:04'),
  //   lastVisit: new Date('2019-06-11T14:23'),
  //   hives: [
  //     { hiveID: 'g4ssxt', firstReading: new Date('2019-04-09T18:04') },
  //     { hiveID: '2f45us', firstReading: new Date('2019-05-27T11:43') }
  //   ]}
  // ];
  User.find()
    .then(documents => {
      response.status(200).json(documents);
    });
});

expressApp.use('/api/stats', (request, response, next) => {
  const statsData = [
    {
      userID: 'f4wfr',
      hiveID: 'g4ssxt',
      timestamp: new Date('2019-10-06T16:50'),
      temperature: 35,
      humidity: 40,
      acoustics: 60.1,
      carbonDioxide: 800
    },
    {
      userID: 'f4wfr',
      hiveID: '2f45us',
      timestamp: new Date('2019-10-06T16:50'),
      temperature: 35.9,
      humidity: 40,
      acoustics: 58.4,
      carbonDioxide: 810
    },
    {
      userID: 'f4wfr',
      hiveID: 'g4ssxt',
      timestamp: new Date('2019-10-06T17:00'),
      temperature: 35,
      humidity: 45,
      acoustics: 60,
      carbonDioxide: 805
    },
    {
      userID: 'f4wfr',
      hiveID: '2f45us',
      timestamp: new Date('2019-10-06T17:00'),
      temperature: 37.7,
      humidity: 39.5,
      acoustics: 58.4,
      carbonDioxide: 812
    },
  ];
  response.status(200).json(statsData);
});

module.exports = expressApp;
