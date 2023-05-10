let suma = 0;
console.time('bucle');
for(let i = 0; i<100000000 ; i++){
    suma += i;
}
console.timeEnd('bucle')


let suma2 = 0;
console.time('bucle 2');
for(let j = 0; j<100000000 ; j++){
    suma2 += j;
}
console.timeEnd('bucle 2')