"use strict";

var http = require("http"),
	express = require("express"),
	socketIo = require("socket.io");

const app = express();
const port = 3232;
const server = new http.Server(app);
const io = socketIo(server);

var history = [];

io.on('connection', socket => {
	console.log("A new user just connected");

	socket.on("chat:add", data => {
		console.log(data);
		history.push(data);
		io.emit("chat:added", data);
	});
	
	socket.on('disconnect', () => {
		console.log("A user disconnected");
	});
});


server.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});