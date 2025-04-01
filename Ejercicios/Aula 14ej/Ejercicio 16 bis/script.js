function contar() {
    let ini = document.getElementById('txti')
    let fin = document.getElementById('txtf')
    let paso = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 || paso.value.length == 0) {
        window.alert('[ERROR] Faltan datos')
    } else {
        res.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(paso.value)
        if (p <= 0) {
            window.alert('Paso inválido! Considere Paso 1')
            p = 1
        }
        if (i < f) {
            
            //Cuenta cresciente

            for(let c = i; c <= f; c += p) {
                 res.innerHTML += ` ${c} \u{1f449}`
        }
                 
        }   else {
               
            //Cuenta decresciente

            for(let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1f449}`
                }
                
        }
         res.innerHTML += `\u{1f3c1}`
    }
}