var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/:room', function(req, res) {
   res.render('room', { room: req.params.room});
});

var nsp = io.of('/my-namespace');
nsp.on('connection', function(socket) {
   socket.emit('hi', `Welcome client '${socket.id}' to my-namespace!`);
    socket.on('join', function(room) {
        console.log("room = "+room);
        socket.join(room);
        nsp.to(room).emit('hi', socket.id+' joined room "'+room+'"');
    });
   console.log('someone connected: '+socket.id);
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
