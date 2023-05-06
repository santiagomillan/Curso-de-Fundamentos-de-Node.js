const fs = require("fs");
const stream = require('stream')
const util = require('util')

let data ="";

let readableStream = fs.createReadStream(__dirname + "/input.txt")

// readableStream.setEncoding('utf8')

// readableStream.on('data' , function(chunk){
//     // console.log(chunk)
//     // console.log(chunk.toString())
//     data += chunk
// })
// readableStream.on('end', function(){
//     console.log(data)
// })

// process.stdout.write("hola")

const TransForm = stream.Transform

function Mayus(){
    TransForm.call(this)
}
util.inherits(Mayus, TransForm)

Mayus.prototype._transform = function(chunk , codif, cb){
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)