const http = require('http');
const server = http.createServer((req, res) => {
    res.end('estoy respondiendo a tu solicitud de Fer')
})

const puerto = 3000;
server.listen(puerto, () => {
    console.log('Escuchando solicitudes Maestro')
})