const http = require('http');
const expressApp = require('./app');

//making sure the received port is a valid number
const assignPort = receivedValue => {
  var port = parseInt(receivedValue);

  if(isNaN(port)) {
    return receivedValue;
  }

  if (port >= 0) {
    return port;
  }

  return port;
};

const onError = receivedError => {
  if (receivedError.syscall != "listen") {
    throw receivedError;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const address = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
};

const port = assignPort(process.env.PORT || "3000");
expressApp.set("port", port);

const server = http.createServer(expressApp);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
