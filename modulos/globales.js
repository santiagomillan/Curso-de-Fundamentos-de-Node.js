// console.log(global)
let i =0
let intervalo = setInterval(function() {
    console.log("hola")
    if (i === 3){
        clearInterval(intervalo)
    }
    i++
}, 1000)

setImmediate(()=>{
    console.log("Ya mismo")
})

// console.log(process)
// console.log(__dirname)
// console.log(__filename)
// console.log()

// global.miVariable = 'mi variable global';
// console.log(miVariable);
