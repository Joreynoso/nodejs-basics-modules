// --> Importar módulo EventMitter
import { EventEmitter } from 'events'

// Crea una instancia de EventMitter
const emisor = new EventEmitter();

// Definir un evento personalizado
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola!, ${nombre}`);
});

// Escuchar el evento
emisor.emit('saludo', 'Mundo');