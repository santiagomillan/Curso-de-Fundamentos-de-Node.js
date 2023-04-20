// const http = require( "http");

// http.createServer(function (req , res){
//     console.log("Nueva peticion")
//     console.log(req.url)

//     res.writeHead(201 , {'Content-type' : "text/plain"})
//     res.write("ya se usar")

//     res.end();
// }).listen(3000)

// console.log("escuchando")

const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;
        
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // // Escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();
}

function hola() {
    return 'Hola, que tal';
}

console.log("Escuchando http en el puerto 3000");