const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/:namespace', function(req, res) {
   res.render('space', { space: req.params.namespace});
});

function welcome(nsp, socket, spaceName) {
   console.log('someone connected to '+spaceName);
   socket.emit('hi', `Welcome client '${socket.id}' to ${spaceName}!`);
   nsp.emit('hi', `Client '${socket.id}' joined ${spaceName}!`);
}

const nsp = io.of('/my-namespace');
nsp.on('connection', function(socket) {
   welcome(nsp, socket, '/my-namespace');
});

const nsp2 = io.of('/your-namespace');
nsp2.on('connection', function(socket) {
   welcome(nsp2, socket, '/your-namespace');
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
