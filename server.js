const io = require('socket.io');

const app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server)
  , port = process.env.PORT || 3000;

server.listen(port);

io.sockets.on('connection', function (socket) {
  socket.on('chat:add', function (data) {
    console.log(data);
  });
});

module.exports(server);