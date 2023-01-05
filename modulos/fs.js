const fs = require("fs")

function leer(ruta, cb){
    fs.readFile(ruta, (err , data)=> {
        console.log(data.toString())
    })
}

// leer(__dirname + "/archivo.txt")

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function (err){
        if (err){
            console.log("no se ha escrito" , err)
        } else {
            console.log("se escribio correctamente")
        }
    })
}

// escribir(__dirname + "/archivo1.txt" , "Soy nuevo", console.log)

function borrar(ruta ,cb){
    fs.unlink(ruta , cb);
}

// borrar(__dirname + "/archivo1.txt", console.log )