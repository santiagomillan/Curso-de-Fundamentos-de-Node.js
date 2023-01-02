// let saludo = "holi"
// console.log(saludo)

// NOMBRE=entrada  node entorno.js
let nombre = process.env.NOMBRE || "Sin nombre"
console.log("hola " + nombre)

// nodemon