var http = require("http"),
	express = require("express"),
	socketIo = require("socket.io");

const app = express();
const port = process.env.PORT || 3000;
const server = new http.Server(app);
const io = socketIo(server);

var history = [];
console.log("All const and vars are required");

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

module.exports = server;