const mongoose = require('mongoose');
const Log = require("./schemas/data");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://User:7gBwopfErUz16uqi@cluster0-s5mhj.mongodb.net/bee-smart?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Connection failed")
  });

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
      console.log("Connection Successful!");

      let i = 0;
      let baseDate=new Date('2019-06-01T13:00');

      for (let i=0;i<2000;i++) {
        // a document instance
        var log1 = new Log({userID: "7364kdvnj", hiveID: "g4ssxt3", timestamp: new Date(baseDate.getTime() + (i*15*60000)), temperature: 35, humidity: 40, acoustics: 60, carbonDioxide:800});
        var log2 = new Log({userID: "7364kdvnj", hiveID: "f4wfr43", timestamp: new Date(baseDate.getTime() + (i*15*60000)), temperature: 35, humidity: 40, acoustics: 60, carbonDioxide:800});

        i = i + 1

        // save model to database
        log1.save(function (err, log) {
          if (err) return console.error(err);
          console.log("saved", i);
        });

        log2.save(function (err, log) {
          if (err) return console.error(err);
          console.log("saved", i);
        });
      }
  });
  //{timestamp: {$gte: ISODate("2019-06-22")}}
