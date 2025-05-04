// tcp-server.js
const net = require('net');

const server = net.createServer((socket) => {
  const clientInfo = {
    ip: socket.remoteAddress,
    port: socket.remotePort,
  };
  socket.write(JSON.stringify(clientInfo) + '\n');
  socket.end();
});

server.listen(5000, () => {
  console.log('TCP t-stun server listening on port 5000');
});
