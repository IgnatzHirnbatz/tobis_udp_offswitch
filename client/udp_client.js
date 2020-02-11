let udp = require('dgram');

// Serverport einstellen
const serverPort = 2222;

// Hier kannst du Daten versenden falls notwendig
let data = "fooBar";

let client = udp.createSocket('udp4');

client.send(data, serverPort, 'localhost', function (error) {
    if (error) {
        client.close();
    } else {
        console.log('Daten wurden gesendet:');
        console.log(data);

        // Client wird beendet wenn nach erfolgreicher Verbindung
        // Auskommentieren wenn Client als Prozess weiter laufen soll
        client.close();
    }
});
