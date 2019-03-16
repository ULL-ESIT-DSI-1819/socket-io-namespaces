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
   console.log('someone connected');
   nsp.emit('hi', 'Hello everyone in my-namespace!');
});

var nsp2 = io.of('/your-namespace');
nsp2.on('connection', function(socket) {
   console.log('someone connected');
   nsp2.emit('hi', 'Hello everyone in your-namespace!');
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
