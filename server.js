var io = require('socket.io');
var express = require('express');

var app = express(),
	server = require('http').createServer(app),
	app = io.listen(server),
	port = process.env.PORT || 3000;

server.listen(port);

app.sockets.on('connection', function (socket) {
  socket.on('chat:add', function (data) {
    console.log(data);
  });
});

module.exports = server;