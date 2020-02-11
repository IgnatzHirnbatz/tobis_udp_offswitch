let udp = require('dgram');
let wintools = require('wintools');

// Serverport hier anpassen
const serverPort = 2222;

// Server beenden nach X Sekunden
// Die letzten 3 Zeilen müssen dafür auch aktiviert werden.
const timeOut = 90000;

let server = udp.createSocket('udp4');

server.on('listening', function () {
    let address = server.address();
    let port = address.port;
    let ipaddr = address.address;
    console.log('Server lüppt!');
    console.log('Port: ' + port);
    console.log('IP: ' + ipaddr);
});

server.on('message', function (message) {
    console.log('Client hat sich verbunden');
    console.log('Daten empfangen: ' + message.toString());

    // Rechner neustarten
    // Versuch erst den folgenden Code
    wintools.shutdown.poweroff(function (cb) {
        console.log(cb)
    });

    // Wenn der darüber nicht geht dann entkommentier die folgenden Zeilen
    // und kommentiere die 3 oberhalb aus.
    // wintools.shutdown.poweroff();
});

server.on('close', function () {
    console.log('Server daun!');
});

server.bind(serverPort);

// setTimeout(function(){
//     server.close();
// }, timeOut);