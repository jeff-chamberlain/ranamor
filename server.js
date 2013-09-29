var io = require('socket.io'),
  express = require('express'),
  http = require('http');
  
var app = express();
var server = http.createServer(app);
var ranio = io.listen(server);
server.listen(process.env.PORT || 5000);
  
ranio.configure(function () { 
  ranio.set("transports", ["xhr-polling"]);
  ranio.set("polling duration", 10); 
});

ranio.of('/player').on('connection', function(socket) {
	socket.emit('con', {message: "Connection Successful!"});
});