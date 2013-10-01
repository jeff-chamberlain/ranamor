var io = require('socket.io'),
  express = require('express'),
  http = require('http'),
  ran = require('ranamor-mod')
  mysql = require('mysql');
  
var app = express();
var server = http.createServer(app);
var ranio = io.listen(server);
server.listen(process.env.PORT || 5000);
  
ranio.configure(function () { 
  ranio.set("transports", ["xhr-polling"]);
  ranio.set("polling duration", 10); 
});

var pool = mysql.createPool({
	host: 'mysql.exninja.com',
	user: 'exninja',
	password: 'ex1stent1al',
	database: 'ranadb',
});

ran.connect_pool(pool);

ranio.of('/player').on('connection', function(socket) {
	ran.config_player(socket);
});