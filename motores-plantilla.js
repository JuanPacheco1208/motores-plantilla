const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

// Configurar Socket.io
io.on('connection', (socket) => {
  console.log('New client connected');
});

// Iniciar el servidor
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
