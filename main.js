// creo aplicacion con express
var path = require('path');
const express = require('express');
const app = express();

// creo servidor http usando la aplicacion express 
var server=require('http').Server(app);
// el servidor soket corre sobre el servidor ya creado
var io =require('socket.io')(server);

const port = 3002;
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));


// configuracion del servidor
server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

//  configurar el socket io 

io.on('connection',function(socket){
    console.log("New Connection");

    io.sockets.emit('msj_to_all',"New player in the server");
    //envio mensaje a cliente conectado
    socket.on('msj_client_to_server',(data)=>{
        console.log(data);
        io.emit('msj_server_to_client',"mensaje recibido por el server");
    });
});




// // Use Node.js body parsing middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true,
// }));

// routes(app);

// // Start the server
// const server = app.listen(port, (error) => {
//     if (error) return console.log(`Error: ${error}`);

//     console.log(`Server listening on port ${server.address().port}`);
// });
