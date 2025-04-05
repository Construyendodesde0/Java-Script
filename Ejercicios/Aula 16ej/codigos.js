const num = document.getElementById('fnum'); // Más directo que querySelector
const lista = document.getElementById('flista');
const res = document.getElementById('res');
const valores = [];

function isNumero(n) {
    return Number.isInteger(Number(n)) && n >= 1 && n <= 100;
}

function inLista(n, l) {
    return l.includes(Number(n));
}

function adicionar() {
    if (num.value === '') {  // Validar campo vacío
        alert('¡Campo vacío! Escribe un número.');
        return;
    }

    if (!isNumero(num.value)) {
        alert('Número inválido. Debe ser entero entre 1 y 100.');
        num.value = '';
        num.focus();
        return;
    }

    if (inLista(num.value, valores)) {
        alert('¡Este número ya está en la lista!');
        num.value = '';
        num.focus();
        return;
    }
// Si pasa todas las validaciones:
    
    const numero = Number(num.value);
    valores.push(numero);
    const item = document.createElement('option');
    item.text = `Valor ${numero} agregado.`;
    lista.appendChild(item);
    res.innerHTML = ''
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicioe valores antes de finalizar!') 
    } else {
        let tot = valores.length
        let mayor = valores[0]
        let menor = valores[0]
        suma = 0
        media = 0

        for (let pos in valores){
            suma += valores[pos]
            if (valores[pos] > mayor)
                mayor = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = suma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> En total, tenemos ${tot} números agregados.</p>`
        res.innerHTML += `<p> El mayor número agregado fue el ${mayor}.</p>`
        res.innerHTML += `<p> El menor número agregado fue el ${menor}.</p>`
        res.innerHTML += `<p> Sumando todos los valores, tenemos ${suma}.</p>`
        res.innerHTML += `<p> La media entre todos los valores es ${media}</p>`
    }
}