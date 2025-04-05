let amigo = {
    nombre: 'José',
    sexo: 'M',
    peso: 89.6,
    engordar(p= 0) {
       console.log('Engordó')
       this.peso += p
    }
}
amigo.engordar(3)
console.log (`${amigo.nombre} pesa ${amigo.peso} kg`)
