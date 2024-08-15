// criação do http 
const http = require( 'http')
const app =  require('../src/app')
// para não ter que criar uma porta nova toda vez que rodar 
const port = parseInt(process.env.port, 10) || 3000
// criando um servidor
const server = http.createServer(app)
// inicializando a api
server.listen(port)
server.on('listening', onListening)
console.log(`Api inicializada na porta ${port}`)
function onListening(){
    const addr = server.address();
    bind = typeof addr == 'string' ? 'pipe' + addr : 'port' + addr.port;
    console.log('Listening on' + bind)
}