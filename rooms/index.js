var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/2', function(req, res) {
   res.sendFile(path.join(__dirname, 'index2.html'));
});

var nsp = io.of('/my-namespace');
nsp.on('connection', function(socket) {
    socket.on('join', function(room) {
        console.log("room = "+room);
        socket.join(room);
        nsp.to(room).emit('hi', socket.id+' connected to room "'+room+'"');
    });
   console.log('someone connected: '+socket.id);
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
