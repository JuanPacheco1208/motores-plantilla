const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  // Envía la plantilla HTML y los datos al cliente a través del WebSocket
  const data = { title: 'Mi título', content: 'Este es el contenido de mi página' };
  const template = '<h1>{{title}}</h1><p>{{content}}</p>';
  socket.send(JSON.stringify({ template, data }));
});
