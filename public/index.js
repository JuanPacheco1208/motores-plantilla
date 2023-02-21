const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('message', (event) => {
  // Parsea los datos recibidos del servidor
  const { template, data } = JSON.parse(event.data);

  // Renderiza la plantilla con los datos en el cliente
  const result = render(template, data);

  // Agrega el resultado al DOM
  const container = document.getElementById('container');
  container.innerHTML = result;
});
