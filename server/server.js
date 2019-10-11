const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

//Instancia del express
const app = express();
let server = http.createServer(app);

//Carpeta de publicación Cliente
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


//Se pone a correr la aplicación por defecto puerto :3000

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);

});