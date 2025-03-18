var ahora = new Date()
var hora = ahora.getHours()

console.log(`Ahora son exactamente las ${hora} horas`)
if (hora <12) {
    console.log('Buen dia!')
} else if (hora >=18) {
    console.log('Buenas tardes')
} else {
    console.log('Buenas noches')
}