// function soyAsincrona(){
//     console.log("soy asincrono")
// }

// soyAsincrona()

function soyAsincrona(nombre, miCallback){
    setTimeout(function(){
        console.log("Hola "+ nombre)
        miCallback(nombre)
    }, 1000)
}

function adios(nombre , otroCall){
    setTimeout(function(){
        console.log("Adios "+ nombre)
        otroCall()
    }, 1000)
}

// console.log("Inicia preceso")
// soyAsincrona("Santi" , function(){
//     adios("Santi " , function() {
//         console.log("Finaliza proceso ")
//     })
    
// })

console.log("Inicia preceso")
soyAsincrona("Santi" , function(nombre){
    adios(nombre , function() {
        console.log("Finaliza proceso ")
    })
    
})