var valores = [8, 1, 2, 11, 7, 3]
valores.sort()
//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos=0; pos < valores.length; pos++) {
    console.log(`La posicion ${pos} tiene el valor ${valores[pos]}`)
}
    */

for(let pos in valores) {
    console.log(`La posicion ${pos} tiene el valor${valores[pos]}`)
}


let pos = valores.indexOf(4)
if (pos == -1)  {
    console.log(`El valor no fue encontrado`)
} else{
    console.log(`El valor está en la posición ${pos}`)
}
