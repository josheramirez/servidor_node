// traer objetos del DOM
// let elemento=documento.getElementById('elemento');
// coneccion al servidor 
var socket=io.connect('http://localhost:3002',{'forceNew':true});

// // recivir mensajes
socket.on('msj_to_all',function(data){
    console.log(data);
})

socket.emit('msj_client_to_server',"primer mensaje");


// // recivir mensajes
socket.on('msj_server_to_client',function(data){
    console.log(data);
})