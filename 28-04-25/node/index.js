//Importar el modulo de http que viene incluido en node.js

const serverHTTP = require('http');

// definir un puerto 

const port=3059;


// crear el servidor 
const server = serverHTTP.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end('Hola desde un server en Node con Http con el modulo Http a Node')
});

server.listen(port,()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`)
});

