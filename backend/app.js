const expressJS = require('express');
const mongoose = require('mongoose');

const expressApp = expressJS();

//uses a middleware on an incoming request
expressApp.use('/api/personal', (request, response, next) => {
  const personalData = [
    { id: 'f4wfr',
    firstVisit: new Date(2019, 3, 5, 15, 35, 0),
    lastVisit: new Date(2019, 7, 10, 3, 24, 0),
    hives: [
      { hiveID: 'g4ssxt', name: 'Ul1', firstReading: new Date(2019, 11, 18, 18, 30, 0) },
      { hiveID: '2f45us', name: 'Ul2', firstReading: new Date(2019, 7, 10, 3, 24, 0) }
    ]}
  ];
  response.status(200).json(personalData);
});

expressApp.use('/api/stats', (request, response, next) => {
  const statsData = [
    {
      userID: 'f4wfr',
      hiveID: 'g4ssxt',
      timestamp: new Date(2019, 11, 18, 18, 30, 0),
      temperature: 37.8,
      humidity: 70,
      acoustics: 60.1,
      carbonDioxide: 0.01
    },
    {
      userID: 'f4wfr',
      hiveID: '2f45us',
      timestamp: new Date(2019, 11, 18, 18, 30, 0),
      temperature: 37.9,
      humidity: 68,
      acoustics: 58.4,
      carbonDioxide: 0.01
    },
  ];
  response.status(200).json(statsData);
});

module.exports = expressApp;
