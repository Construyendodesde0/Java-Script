var edad = 30;
console.log(`Usted tiene ${edad} años`)
if (edad < 16) {
    console.log('No vota'); 
} else if (edad >= 16 && edad < 18 || edad >65) {
    console.log('Voto opcional'); 
} else {
    console.log('Voto obligatorio'); }