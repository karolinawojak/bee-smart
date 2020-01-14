const http = require('http');

const server = http. createServer((request, response) => {
  //end listening
  response.end('sth');
});

server.listen(process.env.PORT || 3000);
