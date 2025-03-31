function contar() {
    let ini = document.getElementById('txti')
    let fin = document.getElementById('txtf')
    let paso = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 ||paso.value.length == 0) {
        window.alert('[ERROR] faltan datos')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(paso.value)
        
        for(let c = i; c<= f; c += p) {
             res.innerHTML += `${c}`
        }
    }
}