// --> importar el módulo HTTP
import http from 'http';

// Crea un servidor HTTP básico
const server = http.createServer((req, res) => {

    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo!')
});

const port = 3000;
const localhost = '127.0.0.1';

server.listen(port, localhost, ()=> {

    console.log(`Escuchando en el puerto: ${port} en la ruta: ${localhost}`);
    
});